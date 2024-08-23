"use server"

import { DetailsInterface } from "../../../app/ui/TradingDashboard/mockdata";

const basePath = "https://api.twelvedata.com"

export const getProductList = async (symbol : string) => {
    const url =  `${basePath}/symbol_search?symbol=${symbol}` ;

    const response = await fetch(url) ;
    
    if(!response.ok) throw new Error("Error occurred during twelvedata symbol data API call "+response.status) ;
    
    const data = await response.json() ;

    const newData : DetailsInterface[] = removeFields(data);

    return newData ;
}

const removeFields = (data : any) : DetailsInterface[] => {

    let DetailsData : DetailsInterface[] = [{}] ;

    for(let i = 0 ; i < data.data.length ; i++){
        delete data.data[i]["exchange_timezone"]
    }

    DetailsData = data.data ;

    return DetailsData ;
}