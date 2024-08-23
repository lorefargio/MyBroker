import {createContext} from "react"
import { DetailsInterface } from "../../app/ui/TradingDashboard/mockdata"


interface SymbolContextInterface {
    symbol : DetailsInterface ,
    setSymbol( symbol : DetailsInterface) : void ,  
}

const defaultContextValue: SymbolContextInterface = {
    symbol: {},
    setSymbol: () => {}, // No-op function
};

const SymbolContext = createContext<SymbolContextInterface>(defaultContextValue) ;

export default SymbolContext