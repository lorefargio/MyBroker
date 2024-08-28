import { db } from "@/lib/db"

export const getStocksByOwnerAndSymbol = async (id : string | undefined , symbol : string | undefined) => {

    if(!id) return null ;
    if(!symbol) return null ;

    try {
        const stocks = db.stock.findUnique({
            where : {
                ownerId_symbol: {
                    ownerId : id,
                    symbol : symbol,
                },
            }
        })

        return stocks
    } catch (error) {
        return null ; 
    }
}

export const updateStockDetails = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number ) => {
    if(!id) return null ;
    if(!symbol) return null ;
    
    try {
        await db.stock.update({
            where : {
                ownerId_symbol: {
                    ownerId : id,
                    symbol : symbol,
                },
            },
            data : {
                quantity : quantity,
                money : money,
            }
        })


    } catch (error) {
        return null ;
    }

    return {sucess : "stock data updated"}
}

export const createStock = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.stock.create({
            data : {
                ownerId : id,
                symbol : symbol,
                quantity : quantity,
                money : money
            }
        })
    } catch (error) {
        return null ;
    }

    return {success : "stock create ok"}
}

export const deleteStock = async (id : string, symbol : string | undefined) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.stock.delete({
            where : {
                ownerId_symbol: {
                    ownerId : id,
                    symbol : symbol,
                },
            }
        })

    } catch (error) {
        return null ; 
    }

    return {sucess : "stock deleted"}
}