"use server"
import { currentUser } from "@/lib/auth";
import { getUserById,} from "../data/user";
import { getAllPortfolioProduct, getPortfolioById } from "../data/portfolio";

export const getPortfolio = async () => {
   const user = await currentUser() ;

   //check user session
   if(!user) throw new Error("Unauthorized")

   const dbUser = await getUserById(user.id) ;
   
   //check that the user is in the database
   if(!dbUser) throw new Error("Unauthorized") ;

   const portfolio = await getPortfolioById(user.id) ;
   
   if(!portfolio) throw new Error("portfolio not found")

   const product = await getAllPortfolioProduct(portfolio.id) ;

   if(!product) throw new Error("Error during the research of the product") ;

   return product ;
}