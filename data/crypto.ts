import { db } from "@/lib/db";

export const getCryptoByOwnerAndSymbol = async (id : string | undefined , symbol : string | undefined) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        const crypto = db.crypto.findUnique({
            where : {
                ownerId_symbol: {
                    ownerId : id,
                    symbol : symbol,
                },
            }
        })

        return crypto
    } catch (error) {
        return null ; 
    }
}

export const updateCryptoDetails = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number ) => {
    if(!id) return null ;
    if(!symbol) return null ;
    
    try {
        await db.crypto.update({
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

    return {sucess : "crypto data updated"}
}

export const createCrypto = async (id : string | undefined, symbol : string | undefined, quantity : number, money : number) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.crypto.create({
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

    return {success : "crypto create ok"}
}

export const deleteCrypto = async (id : string, symbol : string | undefined) => {
    if(!id) return null ;
    if(!symbol) return null ;

    try {
        await db.crypto.delete({
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

    return {sucess : "crypto deleted"}
}

export const getAllCryptoByOwner = async (id : string | undefined) => {
    if(!id) return null ;

    try {
        const crypto = await db.crypto.findMany({
            where : {ownerId : id}
        })

        return crypto ;
    } catch (error) {
        return null ;
    }
}