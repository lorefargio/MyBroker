import { db } from "@/lib/db";

export const getEtfByOwnerAndSymbol = async (id : string | undefined , symbol : string | undefined) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        const etf = db.eTF.findUnique({
            where : {
                ownerId_symbol: {
                    ownerId : id,
                    symbol : symbol,
                },
            }
        })

        return etf
    } catch (error) {
        return null ; 
    }
}

export const updateEtfDetails = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number ) => {
    if(!id) return null ;
    if(!symbol) return null ;
    
    try {
        await db.eTF.update({
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

    return {sucess : "ETF data updated"}
}

export const createEtf = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.eTF.create({
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

    return {success : "ETF create ok"}
}

export const deleteEtf = async (id : string, symbol : string | undefined) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.eTF.delete({
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

    return {sucess : "ETF deleted"}
}

export const getAllEtfByOwner = async (id : string | undefined) => {
    if(!id) return null ;

    try {
        const etf = await db.eTF.findMany({
            where : {ownerId : id}
        })

        return etf ;
    } catch (error) {
        return null ;
    }
}