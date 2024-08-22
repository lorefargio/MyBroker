"use client"
import { 
    Card,
    CardContent,
    CardHeader,
    CardDescription,
} from "@/components/ui/card";

import dynamic from "next/dynamic";
const Timeline = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.Timeline),
  {
    ssr: false,
  }
);

export const NewsCard = () => {
    return (
        <Card className="w-full  max-w-[400px] md:w-full h-auto shadow-md mx-auto">
            <CardHeader>
                <h1 className="text-xl font-bold md:text-2xl">News from the financial world</h1>
            </CardHeader>

            <CardDescription>
                <div className="container justify-center text-base">
                    View crypto assets sorted by their market cap
                </div>
            </CardDescription>

            <CardContent>
                <div className="justify-center">
                    <Timeline width="100%" height="600"/>
                </div>
            </CardContent>
        </Card>
    );
}