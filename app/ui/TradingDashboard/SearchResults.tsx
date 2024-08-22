import SymbolContext from "@/context/SymbolContext";
import { useContext } from "react";

interface SearchResult {
    description : string ,
    displaySymbol: string,
    symbol: string,
    type: string,
}


interface SearchResultsProp {
    results? : SearchResult[],
}

const SearchResults = ({results} : SearchResultsProp) => {
    const {setSymbol} = useContext(SymbolContext)
    return ( 
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200">
        {results?.map((item) => {
            return <li 
            key={item.symbol} 
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-gray-200"
            onClick={() => {
                setSymbol(item.symbol)
            }}
            >
                <span>{item.symbol}</span>
                <span>{item.description}</span>
            </li>
        })}
    </ul> 
    );
}
 
export default SearchResults;