"use client"
import { 
    Card,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card";

import dynamic from "next/dynamic";

const StockMarket = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.StockMarket),
  {
    ssr: false,
  }
);

export const StockMarketCard = () => {

    return (
        <Card className="w-full max-w-[400px] md:max-w-[600px] h-auto shadow-md mx-auto">
            <CardHeader>
                <h1 className="text-xl md:text-2xl font-bold">Stock Market Overview</h1>
            </CardHeader>

            <CardDescription className="gap-y-2">
                <div className="container justify-center text-base">
                    See the top five gaining, losing, and most active stocks for the day
                </div>
            </CardDescription>

            <CardContent>
                <div className="justify-center">
                    <StockMarket width="100%" showFloatingTooltip={true}/>
                </div>
            </CardContent>
        </Card>
    ) ;
}