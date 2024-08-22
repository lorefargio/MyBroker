import {createContext} from "react"

interface SymbolContextInterface {
    symbol : string ,
    setSymbol( symbol : string) : void ,  
}

const defaultContextValue: SymbolContextInterface = {
    symbol: "",
    setSymbol: () => {}, // No-op function
};

const SymbolContext = createContext<SymbolContextInterface>(defaultContextValue) ;

export default SymbolContext