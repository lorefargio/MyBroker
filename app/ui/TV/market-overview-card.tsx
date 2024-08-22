"use client"
import { 
    Card,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card";

import dynamic from "next/dynamic";
const MarketOverview = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.MarketOverview),
  {
    ssr: false,
  }
);

export const MarketOverviewCard = () => {
    
    const tabs = [
        {
          "title": "Indices",
          "symbols": [
            {
              "s": "FOREXCOM:SPXUSD",
              "d": "S&P 500"
            },
            {
              "s": "FOREXCOM:NSXUSD",
              "d": "Nasdaq 100"
            },
            {
              "s": "FOREXCOM:DJI",
              "d": "Dow 30"
            },
            {
              "s": "INDEX:NKY",
              "d": "Nikkei 225"
            },
            {
              "s": "INDEX:DEU30",
              "d": "DAX Index"
            },
            {
              "s": "FOREXCOM:UKXGBP",
              "d": "UK 100"
            }
          ],
          "originalTitle": "Indices"
        },
        {
          "title": "Commodities",
          "symbols": [
            {
              "s": "CME_MINI:ES1!",
              "d": "S&P 500"
            },
            {
              "s": "CME:6E1!",
              "d": "Euro"
            },
            {
              "s": "COMEX:GC1!",
              "d": "Gold"
            },
            {
              "s": "NYMEX:CL1!",
              "d": "Crude Oil"
            },
            {
              "s": "NYMEX:NG1!",
              "d": "Natural Gas"
            },
            {
              "s": "CBOT:ZC1!",
              "d": "Corn"
            }
          ],
          "originalTitle": "Commodities"
        },
        {
          "title": "Forex",
          "symbols": [
            {
              "s": "FX:EURUSD"
            },
            {
              "s": "FX:GBPUSD"
            },
            {
              "s": "FX:USDJPY"
            },
            {
              "s": "FX:USDCHF"
            },
            {
              "s": "FX:AUDUSD"
            },
            {
              "s": "FX:USDCAD"
            }
          ],
          "originalTitle": "Forex"
        }
    ]



    return (
        <Card className="w-full max-w-[400px] h-auto shadow-md mx-auto">
            <CardHeader>
                <h1 className="text-xl md:text-2xl font-bold">Macro Markets Overview</h1>
            </CardHeader>

            <CardDescription className="gap-y-2">
                <div className="container justify-center text-base">
                    A quick overview of the performance of the main indices, commodities and currencies
                </div>
            </CardDescription>

            <CardContent>
                <div className="justify-center">
                    <MarketOverview width="100%" height="600" tabs={tabs} showFloatingTooltip={true} />
                </div>
            </CardContent>

        </Card>
    );
}