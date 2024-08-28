import { db } from "@/lib/db";

export const getPortfolioById = async (id : string | undefined) => {
    try {
        const portfolio = db.portfolio.findUnique({
            where: {
                userId : id 
            }
        })

        return portfolio ;
    } catch (error) {
        return null ;
    }
}


export const addStockToPortfolio = async (id : string | undefined) => {
    try {
        const portfolio = db.portfolio.findUnique({
            where: {
                userId : id 
            }
        })
        
       
    } catch (error) {
        return null ;
    }
}