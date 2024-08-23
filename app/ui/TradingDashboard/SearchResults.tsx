import SymbolContext from "@/context/SymbolContext";
import { useContext } from "react";
import { DetailsInterface } from "./mockdata";

interface SearchResultsProp {
    results? : DetailsInterface[],
}

const SearchResults = ({results} : SearchResultsProp) => {
    const {setSymbol} = useContext(SymbolContext)
    return ( 
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200">
        <div className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md font-semibold">
            <span>Symbol</span>
            <span>Name</span>
            <span>Exchange</span>
        </div>
        {results?.map((item,index) => {
            return <li 
            key={index} 
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-gray-200"
            onClick={() => {
                setSymbol(item)
            }}
            >
                <span>{item.symbol}</span>
                <span>{item.instrument_name}</span>
                <span>{item.exchange}</span>
            </li>
        })}
    </ul> 
    );
}
 
export default SearchResults;