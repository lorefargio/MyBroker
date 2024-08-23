'use client'
import { useState } from "react";
import Dashboard from "../../ui/TradingDashboard/Dashboard";
import SymbolContext from "../../../src/context/SymbolContext";
import { DetailsInterface } from "../../ui/TradingDashboard/mockdata";

const TradePage = () => {
    const baseCaseSymbol : DetailsInterface = {
        "symbol": "AA",
        "instrument_name": "Alcoa Corp",
        "exchange": "NYSE",
        "mic_code": "XNYS",
        "instrument_type": "Common Stock",
        "country": "United States",
        "currency": "USD"
    }
    const [symbol, setSymbol] = useState(baseCaseSymbol) ;

    
    return (
        <SymbolContext.Provider value = {{symbol,setSymbol}}>
            <Dashboard/>
        </SymbolContext.Provider>
    ) ;
}

export default TradePage ;