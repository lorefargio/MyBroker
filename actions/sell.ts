"use server"


import * as z from "zod"
import { BuySchema } from "../schemas";
import { DetailsInterface } from "../app/ui/TradingDashboard/mockdata";

import { currentUser } from "@/lib/auth";
import { getUserById, updateUserBalance } from "../data/user";
import { getPortfolioById } from "../data/portfolio";
import { deleteStock, getStocksByOwnerAndSymbol, updateStockDetails } from "../data/stock";
import { FormatMoney } from "@/lib/utils";
import { deleteEtf, getEtfByOwnerAndSymbol, updateEtfDetails } from "../data/etf";
import { deleteCrypto, getCryptoByOwnerAndSymbol, updateCryptoDetails } from "../data/crypto";

export const Sell = async ({sharesNumber} : z.infer<typeof BuySchema>, price : number, symbolDetails : DetailsInterface) => {

   const shares = Number(sharesNumber)

   const TotalPrice = Number((shares * price).toFixed(2)) ;

   const user = await currentUser() ;

   //check user session
   if(!user) return {error:"Unauthorized"} ;

   const dbUser = await getUserById(user.id) ;
   
   //check that the user is in the database
   if(!dbUser) return {error:"Unauthorized"} ;

   const portfolio = await getPortfolioById(user.id) ;

   
   if(!portfolio) return {error: "portfolio not found"}


   switch (symbolDetails.instrument_type) {
      case "Common Stock":
         
         const stocks = await getStocksByOwnerAndSymbol(portfolio.id, symbolDetails.symbol)

         if(!stocks) return {error: "You can't sell stock you don't own"}
         
         
         if(stocks.quantity < shares) return {error : `You can't sell ${sharesNumber} ${symbolDetails.symbol} if you only own ${stocks.quantity}`}
         
         if(stocks.quantity == shares){
            const response = await deleteStock(portfolio.id,symbolDetails.symbol) ;

            if(!response) return {error : "Error during deleting stocks"}
         } 

         if(stocks.quantity > shares){
            const response = await updateStockDetails(portfolio.id,symbolDetails.symbol,stocks.quantity - shares,stocks.money - TotalPrice) ;

            if(!response) return {error : "Error during updating stock details"}
         }
         

         break;
      
      case "Digital Currency":
         const crypto = await getCryptoByOwnerAndSymbol(portfolio.id, symbolDetails.symbol) ;

         if(!crypto) return {error: "You can't sell crypto you don't own"}

         if(crypto.quantity < shares) return {error : `You can't sell ${sharesNumber} ${symbolDetails.symbol} if you only own ${crypto.quantity}`}

         if(crypto.quantity == shares){
            const response = await deleteCrypto(portfolio.id,symbolDetails.symbol) ;

            if(!response) return {error : "Error during deleting crypto"}
         } 

         if(crypto.quantity > shares){
            const response = await updateCryptoDetails(portfolio.id,symbolDetails.symbol,crypto.quantity-shares,crypto.money-TotalPrice) ;

            if(!response) return {error : "Error during updating crypto details"}
         } 
         break;

      default:
         const etf = await getEtfByOwnerAndSymbol(portfolio.id, symbolDetails.symbol) ;

         if(!etf) return {error: "You can't sell ETF you don't own"}

         if(etf.quantity < shares) return {error : `You can't sell ${sharesNumber} ${symbolDetails.symbol} if you only own ${etf.quantity}`}

         if(etf.quantity == shares){
            const response = await deleteEtf(portfolio.id,symbolDetails.symbol) ;

            if(!response) return {error : "Error during deleting ETF"}
         }

         if(etf.quantity > shares){
            const response = await updateEtfDetails(portfolio.id,symbolDetails.symbol,etf.quantity-shares,etf.money-TotalPrice)
         }

         break;
   }

   const response = await updateUserBalance(user.id,user.credit + TotalPrice) ;

   if(!response) return {error: "error updating balance"}

   return {success : `Sell completed for ${FormatMoney(TotalPrice)} `}
}