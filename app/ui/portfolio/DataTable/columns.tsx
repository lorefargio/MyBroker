"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Product } from "../../TradingDashboard/mockdata"

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
        header : "Money invested"
    },
    {
        accessorKey : "current_value",
        header :"Current value"
    },
    {
        accessorKey : "change",
        header : "Yield"
    }
]