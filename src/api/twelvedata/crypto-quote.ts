"use server"
import { PriceTabInterface } from "../../../app/ui/TradingDashboard/mockdata";
const basePath = "https://api.twelvedata.com"

export const getCryptoQuote = async (symbol : string | undefined) => {
    const url =  `${basePath}/quote?symbol=${symbol}&apikey=${process.env.TWELVEDATA_API_KEY}` ;

    const response = await fetch(url) ;

    if(!response.ok) throw new Error("Error occurred during twelvedata crypto quote data API call "+response.status) ;
    
    const data = await response.json() ;



    const cryptoQuote : PriceTabInterface = {
        symbol : data.symbol as string,
        pc : data.close as number,
        d : data.change as number,
        dp : data.percent_change as number
    }
    return cryptoQuote ;
}