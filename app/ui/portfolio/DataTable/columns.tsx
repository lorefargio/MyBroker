"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "../../TradingDashboard/mockdata"
import { FormatMoney } from "@/lib/utils";

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey : "symbol",
        header : "Symbol"
    },
    {
        accessorKey : "quantity",
        header : "Share number",
    },
    {
        accessorKey : "money",
        header : "Money invested",
        cell : ({row}) => {
            const value = row.getValue<number>("money") ;
            return (
                <div>
                  {FormatMoney(value)} 
                </div>
            );
        }
    },
    {
        accessorKey : "current_value",
        header :"Current value",
        cell : ({row}) => {
            const money = row.getValue<number>("money") ;
            const current_value = row.getValue<number>("current_value") ;
            const shares = row.getValue<number>("quantity")
            return (
                <div className={!current_value ? "" : ((current_value * shares) > money ) ? "text-lime-500" : "text-red-500"}>
                  {current_value && (FormatMoney(current_value * shares))} 
                </div>
            );
        }
    },
    {
        accessorKey : "change",
        header : "Yield",
        cell : ({row}) => {
            const money = row.getValue<number>("money") ;
            const current_value = row.getValue<number>("current_value") ;
            const shares = row.getValue<number>("quantity") ;
            const Yield = row.getValue<number>("change") ;
            return (
                <div className={!current_value ? "" : ((current_value * shares) > money ) ? "text-lime-500" : "text-red-500"}>
                  {current_value && (Yield)} %
                </div>
            );
        }
    }
]