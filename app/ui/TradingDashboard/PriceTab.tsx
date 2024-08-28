import { Button } from "@/components/ui/button";
import DashboardCard from "./Dashboard-card";
import { PriceTabProp } from "./mockdata";
import { useState } from "react";
import Modal from "./Modal";
import BuyCard from "./buy-card";
import SellCard from "./sell-card";

const PriceTab = ({symbol, price, change, changePercent} : PriceTabProp) => {
    const [isBuyModalOpen, setIsBuyModalOpen] = useState<boolean>(false) ;
    const [isSellModalOpen, setIsSellModalOpen] = useState<boolean>(false) ;
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
            <Button className="md:w-40" variant={"destructive"} onClick={() => setIsSellModalOpen(true)}>Sell</Button>
            <Button className="md:w-40 bg-green-500 hover:bg-green-400" onClick={() => setIsBuyModalOpen(true)} >Buy</Button>
        </div>

        {isSellModalOpen && (
            <Modal isOpen={isSellModalOpen} handleClose={() => setIsSellModalOpen(!isSellModalOpen)}>
                <div className="flex flex-col justify-between h-full w-full">
                    <SellCard price={price}/>
                </div>
            </Modal>
        )}

        {isBuyModalOpen && (
            <Modal isOpen={isBuyModalOpen} handleClose={() => setIsBuyModalOpen(!isBuyModalOpen)}>
                <BuyCard price={price}/>
            </Modal>
        )}

    </DashboardCard>);
}
 
export default PriceTab;
