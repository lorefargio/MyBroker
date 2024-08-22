import DashboardCard from "./Dashboard-card";
import { PriceTabInterface } from "./mockdata";

const PriceTab = ({symbol, price, change, changePercent, currency} : any) => {
    return (
    <DashboardCard>
        
        <span className="absolute left-4 top-4 text-neutral-500 text-lg xl:text-xl 2xl:text-2xl">
            {symbol}
        </span>

        <div className="w-full h-full flex items-center justify-around">

            <div className="text-2xl xl:text-4xl 2xl:text-5xl flex items-cente m-2">

                ${price}
            
                <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
                    {currency}
                </span>
            </div>

            <span className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-red-500"}`}>
                {`${change > 0 ? "+" : ""} ${change}`} <span>({changePercent}%)</span>
            </span>
            
        </div>
        
    </DashboardCard>);
}
 
export default PriceTab;

/*



<span className="absolute left-4 top-4 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
            {symbol}
        </span>

        <div className="w-full h-full items-center justify-around">

            <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">

                ${price}
            
                <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
                    {currency}
                </span>
            </span>

            <span className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-red-500"}`}>
                {change} <span>{changePercent}%</span>
            </span>
        </div>


*/ 