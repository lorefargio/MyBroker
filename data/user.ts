import { db } from "@/lib/db";

export const getUserByEmail = async (email:string | undefined) => {
    try{
        const user = await db.user.findUnique({where:{email}}) ;
        return user ;
    }catch{
        return null ;
    }
};

export const getUserById = async (id:string | undefined) => {
    try{
        const user = await db.user.findUnique({where:{id}}) ;
        return user ;
    }catch{
        return null ;
    }
};

export const updateUserBalance = async (id: string | undefined, newcredit : number) => {
    try {
        await db.user.update({
            where: {id},
            data: {
                credit : Number(newcredit.toFixed(2)) 
            }
        })

        return {success : "balance updated"}
    } catch (error) {
        return null ;
    }
}