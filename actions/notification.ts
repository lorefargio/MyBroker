"use server"

import webpush from "web-push"
import { getPushSubscription } from "../data/PushSubscription"

export const sendNotification = async (message : string, userId : string, name:string) => {
    const vapidKeys = {
        publicKey: process.env.NEXT_PUBLIC_VAPID_KEY!,
        privateKey : process.env.NEXT_PRIVATE_VAPID_KEY!,
    }

    webpush.setVapidDetails(
        "mailto:myuser@mybroker.store",
        vapidKeys.publicKey,
        vapidKeys.privateKey,
    )

    const data = await getPushSubscription(userId) ;

    if(!data) return {error: "error during the fetch of the pushSubscription"}

    try {
        await webpush.sendNotification(
            data,
            JSON.stringify({
                message: name,
                body: message,
            })
        );
        
        return {sucess : "notification send correctly"};
    } catch (e) {
        
        return { error: "failed to send notification" };
    }
}