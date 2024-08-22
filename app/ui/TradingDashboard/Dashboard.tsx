import { useEffect, useState, useContext } from "react";
import Details from "./Details";
import {DetailsInterface, PriceTabInterface} from "./mockdata";
import SearchComponent from "./Search";
import PriceTab from "./PriceTab";
import Chart from "./Chart";
import SymbolContext from "@/context/SymbolContext";
import { fetchQuote, fetchSymbolDetails } from "@/api/finnhub/stock-api";

const Dashboard = () => {
    const {symbol} = useContext(SymbolContext) ;

    let baseCaseSymbolDetails : DetailsInterface = {}
    let baseCaseQuote : PriceTabInterface = {}

    const [symbolDetails, setSymbolDetails] = useState(baseCaseSymbolDetails) ;
    const [quote, setQuote] = useState(baseCaseQuote) ;

    useEffect(() => {
        const updateSymbolDetails = async () => {
            try {
                const result = await fetchSymbolDetails(symbol) ;
                setSymbolDetails(result)
            } catch (error) {
                setSymbolDetails({})
                console.log(error)
            }
        };

        const updateSymbolOverview = async () => {
            try {
                const result = await fetchQuote(symbol) ;
                setQuote(result)
            } catch (error) {
                setQuote({})
                console.log(error)
            }
        };

        updateSymbolDetails()
        updateSymbolOverview()
    },[symbol])
    return ( 
    <div className="h-screen grid grid-cols1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10">

        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
            <h1 className="text-5xl font-bold py-3">{symbolDetails.name}</h1>
            <SearchComponent/>
        </div>

        <div className="md:col-span-2 row-span-4">
            <Chart/>
        </div>

        <div className="md:col-span-1 row-span-1 ">
             <PriceTab symbol = {symbol} price={quote.pc} change={quote.d} changePercent={quote.dp} currency={symbolDetails.currency}/>
        </div>

        <div className="row-span-2 xl:row-span-3">
            <Details details={symbolDetails}/>
        </div>

    </div> 
    );
}
 
export default Dashboard;
