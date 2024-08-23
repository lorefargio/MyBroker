import { useEffect, useState, useContext } from "react";
import Details from "./Details";
import {DetailsInterface, PriceTabInterface} from "./mockdata";
import SearchComponent from "./Search";
import PriceTab from "./PriceTab";
import Chart from "./Chart";
import SymbolContext from "@/context/SymbolContext";
import { fetchQuote} from "@/api/finnhub/stock-api";

const Dashboard = () => {
    const {symbol} = useContext(SymbolContext) ;
    
    let baseCaseSymbolDetails : DetailsInterface = {
        symbol: "AA",
        instrument_name: "Alcoa Corp",
        exchange: "NYSE",
        mic_code: "XNYS",
        instrument_type: "Common Stock",
        country: "United States",
        currency: "USD"
    }
    let baseCaseQuote : PriceTabInterface = {
        symbol: "AA",
        pc: 0,
        d: 0,
        dp: 0
    }

    const [symbolDetails, setSymbolDetails] = useState<DetailsInterface>(baseCaseSymbolDetails) ;
    const [quote, setQuote] = useState<PriceTabInterface>(baseCaseQuote) ;

    useEffect(() => {
        const updateSymbolDetails = async () => {
            try {
                setSymbolDetails(symbol)
            } catch (error) {
                setSymbolDetails(baseCaseSymbolDetails)
                console.log(error)
            }
        };

        const updateSymbolOverview = async () => {
            try {
                const result = await fetchQuote(symbol.symbol) ;
                setQuote(result)
            } catch (error) {
                setQuote(baseCaseQuote)
                console.log(error)
            }
        };

        updateSymbolDetails()
        updateSymbolOverview()
    },[symbol])
    return ( 
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-4 sm:p-6 md:p-10">

        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
            <h1 className="text-4xl sm:text-5xl font-bold py-3">{symbol.instrument_name}</h1>
        </div>

        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
            <SearchComponent />
        </div>

        <div className="md:col-span-2 row-span-5 sm:col-span-1">
            <Chart/>
        </div>

        <div className="md:col-span-1 row-span-2 ">
              <PriceTab symbol = {symbol.symbol as string} price={quote.pc} change={quote.d} changePercent={quote.dp} />
        </div>

        <div className="row-span-2 xl:row-span-3">
            <Details details={symbol}/>
        </div>

        </div>
    );
}
 
export default Dashboard;
