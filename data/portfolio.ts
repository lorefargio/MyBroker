import { db } from "@/lib/db";
import { getAllStocksByOwner } from "./stock";
import { getAllCryptoByOwner } from "./crypto";
import { getAllEtfByOwner } from "./etf";
import { Portfolio , Product} from "../app/ui/TradingDashboard/mockdata";
import { FormatProduct } from "@/lib/utils";

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

export const getAllPortfolioProduct = async (id : string | undefined) => {
    let PortfolioFormatted : Portfolio = {
        stocks : [],
        etfs : [],
        crypto : []
    }

    
    const stocks = await getAllStocksByOwner(id) ;
    
    if(!stocks) return null ;

    const crypto = await getAllCryptoByOwner(id) ;
    
    if(!crypto) return null ;

    const etfs = await getAllEtfByOwner(id) ;
    
    if(!etfs) return null ;

    PortfolioFormatted.stocks = stocks ;

    PortfolioFormatted.crypto = crypto ;

    PortfolioFormatted.etfs = etfs ;

    return PortfolioFormatted ;
}