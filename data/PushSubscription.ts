"use server"

import { db } from "@/lib/db"

export const createPushSubscription = async (id : string | undefined, subscription : string) => {
    if(!id) return {error : "Error during the creation of the pushSubscription, ID is undefined"} ;

    try {
        await db.user.update({
            where : {id : id},
            data : {
                pushSubscription : subscription 
            }
        })

        return {success : "Push notifications allowed"}
    } catch (error) {
        return {error : "Error during the creation of the pushSubscription"}
    }
}

export const deletePushSubscription = async (id : string | undefined) => {
    if(!id) return {error : "Error during the creation of the pushSubscription, ID is undefined"} ;

    try {
        await db.user.update({
            where : {id : id},
            data : {
                pushSubscription : "" 
            }
        })

        return {success : "Push notifications not allowed"}
    } catch (error) {
        return {error : "Error during the creation of the pushSubscription"}
    }
}

export const getPushSubscription = async (id : string)  => {
    try {
        const user = await db.user.findUnique({
            where : {id : id}
        })

        return await JSON.parse(user?.pushSubscription!) ;
    } catch (error) {
        return null ;
    }
}