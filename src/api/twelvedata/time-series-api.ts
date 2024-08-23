'use server'

import { getDates } from "@/lib/utils";


const basePath = "https://api.twelvedata.com"

export const getHistoricalData = async (symbol : string = "AAPL") => {
    const [todayFormatted, lastYearFormatted] = getDates();
    
    const url =  `${basePath}/time_series?apikey=${process.env.TWELVEDATA_API_KEY}&interval=15min&dp=2&start_date=${lastYearFormatted}&end_date=${todayFormatted}&symbol=${symbol}` ;

    const response = await fetch(url) ;
    
    if(!response.ok) throw new Error("Error occurred during twelvedata time-serires data API call "+response.status) ;
    
    return await response.json() ;
}
