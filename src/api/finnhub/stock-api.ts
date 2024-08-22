'use server'

const basePath = "https://finnhub.io/api/v1"

export const searchSymbol = async (query : string) => {
    const url =  `${basePath}/search?q=${query}&token=${process.env.FINNHUB_API_KEY}` ;

    const response = await fetch(url) ;

    if(!response.ok) throw new Error("Error occurred during searchSymbol API call"+response.status) ;

    return await response.json() ;
}

export const fetchSymbolDetails = async (symbol : string) => {
    const url = `${basePath}/stock/profile2?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}` ;
    
    const response = await fetch(url) ;

    if(!response.ok) throw new Error("Error occurred during fetchSymbolDetails API call"+response.status) ;

    return await response.json() ;
}

export const fetchQuote = async (symbol : string) => {
    const url = `${basePath}/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}` ;

    const response = await fetch(url) ;

    if(!response.ok) throw new Error("Error occurred during fetchQuote API call"+response.status) ;

    return await response.json() ;
}

