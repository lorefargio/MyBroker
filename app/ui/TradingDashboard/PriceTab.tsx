import { Button } from "@/components/ui/button";
import DashboardCard from "./Dashboard-card";
import { PriceTabProp } from "./mockdata";

const PriceTab = ({symbol, price, change, changePercent} : PriceTabProp) => {
    return (
    <DashboardCard>
        
        <span className="absolute left-4 top-4 text-neutral-500  text-xs md:text-lg">
            {symbol}
        </span>

        <div className="flex items-center justify-around">

            <div className=" text-sm md:text-2xl xl:text-4xl flex items-cente m-2">
                ${price}
            </div>

            <span className={`text-xs md:text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-red-500"}`}>
                {`${change > 0 ? "+" : ""}${change}   `} <span>({changePercent}%)</span>
            </span>
            
        </div>

        <div className="flex justify-around md:mt-10">
            <Button className="">Sell</Button>
            <Button className="bg-gray-400 hover:bg-gray-300">Buy</Button>
        </div>
    </DashboardCard>);
}
 
export default PriceTab;
