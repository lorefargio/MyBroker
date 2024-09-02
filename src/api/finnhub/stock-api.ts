'use server'

const basePath = "https://finnhub.io/api/v1"

export const fetchQuote = async (symbol : string | undefined) => {
    const url = `${basePath}/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}` ;

    const response = await fetch(url) ;

    if(!response.ok) throw new Error("Error occurred during fetchQuote API call "+response.status) ;

    return await response.json() ;
}

