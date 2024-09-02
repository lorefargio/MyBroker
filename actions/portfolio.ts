"use server"
import { currentUser } from "@/lib/auth";
import { getUserById,} from "../data/user";
import { getAllPortfolioProduct, getPortfolioById } from "../data/portfolio";
import { fetchQuote } from "@/api/finnhub/stock-api";
import { getCryptoQuote } from "@/api/twelvedata/crypto-quote";

//function that returns the user's portfolio containing all the assets he owns

export const getPortfolio = async () => {
   const user = await currentUser() ;

   //check user session
   if(!user) throw new Error("Unauthorized")

   const dbUser = await getUserById(user.id) ;
   
   //check that the user is in the database
   if(!dbUser) throw new Error("Unauthorized") ;

   const portfolio = await getPortfolioById(user.id) ;
   
   if(!portfolio) throw new Error("portfolio not found")

   const products = await getAllPortfolioProduct(portfolio.id) ;

   if(!products) throw new Error("Error during the research of the product") ;

   for(let stock of products.stocks){
      let quote = await fetchQuote(stock.symbol) ;
      stock.current_value = quote.pc ;

      if(!stock.current_value) stock.current_value = Number((stock.money/stock.quantity).toFixed(2)) ;

      stock.change = Number((((stock.current_value - (stock.money/stock.quantity))/(stock.money/stock.quantity))*100).toFixed(2)) ;
   }

   for(let etf of products.etfs){
      let quote = await fetchQuote(etf.symbol) ;
      etf.current_value = quote.pc ;

      if(!etf.current_value) etf.current_value = Number((etf.money/etf.quantity).toFixed(2)) ;

      etf.change = Number((((etf.current_value - (etf.money/etf.quantity))/(etf.money/etf.quantity))*100).toFixed(2)) ;
   }

   for(let token of products.crypto){
      let quote = await getCryptoQuote(token.symbol) ;

      token.current_value = quote.pc ;

      if(!token.current_value) token.current_value = Number((token.money/token.quantity).toFixed(2)) ;

      token.change = Number((((token.current_value - (token.money/token.quantity))/(token.money/token.quantity))*100).toFixed(2)) ;
   }

   return products ;
}