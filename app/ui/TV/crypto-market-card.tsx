"use client"
import { 
    Card,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card";

import dynamic from "next/dynamic";
const CryptoCurrencyMarket = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.CryptoCurrencyMarket),
  {
    ssr: false,
  }
);

export const CryptoMarketCard = () => {
    return (
        <Card className="w-full md:w-full h-auto shadow-md mx-auto">
            <CardHeader>
                <h1 className="text-xl font-bold md:text-2xl">Crypto Market Overview</h1>
            </CardHeader>

            <CardDescription>
                <div className="container justify-center text-base">
                    View crypto assets sorted by their market cap
                </div>
            </CardDescription>

            <CardContent>
                <div className="justify-center">
                    <CryptoCurrencyMarket height="600" width="100%"/>
                </div>
            </CardContent>
        </Card>
    );
}