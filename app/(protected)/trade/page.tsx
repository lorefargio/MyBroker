'use client'
import { useState } from "react";
import Dashboard from "../../ui/TradingDashboard/Dashboard";
import SymbolContext from "../../../src/context/SymbolContext";

const TradePage = () => {
    const [symbol, setSymbol] = useState("FB") ;

    
    return (
        <SymbolContext.Provider value = {{symbol,setSymbol}}>
            <Dashboard/>
        </SymbolContext.Provider>
    ) ;
}

export default TradePage ;