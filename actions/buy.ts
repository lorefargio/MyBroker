"use server"

import * as z from "zod"
import { BuySchema } from "../schemas";
import { DetailsInterface } from "../app/ui/TradingDashboard/mockdata";

import { currentUser } from "@/lib/auth";
import { getUserById, updateUserBalance } from "../data/user";
import { getPortfolioById } from "../data/portfolio";
import { createStock, getStocksByOwnerAndSymbol, updateStockDetails } from "../data/stock";
import { createCrypto, getCryptoByOwnerAndSymbol, updateCryptoDetails } from "../data/crypto";
import { createEtf, getEtfByOwnerAndSymbol, updateEtfDetails } from "../data/etf";
import { FormatMoney } from "@/lib/utils";

export const Buy = async ({sharesNumber} : z.infer<typeof BuySchema>, price : number, symbolDetails : DetailsInterface) => {
   const TotalPrice = Number((Number(sharesNumber) * price).toFixed(2))

   const user = await currentUser() ;

   //check user session
   if(!user) return {error:"Unauthorized"} ;

   const dbUser = await getUserById(user.id) ;
   
   //check that the user is in the database
   if(!dbUser) return {error:"Unauthorized"} ;


   if(user.credit < TotalPrice) return {error : "insufficient credit, add funds to continue purchase"}

   const portfolio = await getPortfolioById(user.id) ;

   
   if(!portfolio) return {error: "portfolio not found"}


   switch (symbolDetails.instrument_type) {
      case "Common Stock":
         
         const stocks = await getStocksByOwnerAndSymbol(portfolio.id, symbolDetails.symbol)
         
         if(stocks){
            const response = await updateStockDetails(portfolio.id,symbolDetails.symbol,stocks.quantity + Number(sharesNumber),stocks.money + TotalPrice) ;
            
            if(!response) return {
               error: "Something went wrong during updating stock details"
            }
         }else{

            const response = await createStock(portfolio.id,symbolDetails.symbol,Number(sharesNumber),TotalPrice)

            if(!response) return {
               error: "Something went wrong during create stock"
            }
         }

         break;
      
      case "Digital Currency":
         const crypto = await getCryptoByOwnerAndSymbol(portfolio.id, symbolDetails.symbol) ;

         if(crypto){
            const response = await updateCryptoDetails(portfolio.id,symbolDetails.symbol,crypto.quantity + Number(sharesNumber),crypto.money + TotalPrice) ;

            if(!response) return {
               error: "Something went wrong during updating crypto details"
            }
         }else{
            const response = await createCrypto(portfolio.id,symbolDetails.symbol,Number(sharesNumber),TotalPrice) ;

            if(!response) return {
               error: "Something went wrong during create crypto"
            }
         }
         break;

      default:
         const etf = await getEtfByOwnerAndSymbol(portfolio.id, symbolDetails.symbol) ;

         if(etf){
            const response = await updateEtfDetails(portfolio.id,symbolDetails.symbol,etf.quantity + Number(sharesNumber),etf.money + TotalPrice )

            if(!response) return {
               error: "Something went wrong during updating ETF details"
            }
         }else{
            const response = await createEtf(portfolio.id,symbolDetails.symbol,Number(sharesNumber),TotalPrice) ;

            if(!response) return {
               error: "Something went wrong during create ETF"
            }
         }

         break;
   }
   
   const response = await updateUserBalance(user.id,user.credit - TotalPrice) ;

   if(!response) return {error: "error updating balance"}

   return {success : `Purchase completed for ${FormatMoney(TotalPrice)} `}
}

