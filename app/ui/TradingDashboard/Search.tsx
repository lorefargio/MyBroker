'use client'
import { useState } from "react";

import { Input } from "@/components/ui/input";
import {X, Search} from "lucide-react"
import { Button } from "@/components/ui/button";
import SearchResults from "./SearchResults";
import { getProductList } from "@/api/twelvedata/product-list";
import { DetailsInterface } from "./mockdata";

const SearchComponent = () => {
    const [input, setInput] = useState("") ;
    const [bestMatches, setBestMatches] = useState<DetailsInterface[]>([]);

    const updateBestMatches = async () => {

        try{
            if(input) {
                const searchResult = await getProductList(input) ;
                
                setBestMatches(searchResult)
            }
        }catch(e){
            setBestMatches([]) ;
            console.log(e) ;
        }
    }

    const clear = () => {
        setBestMatches([])
        setInput("")
    }

    return ( 
    <div className="flex items-center my-4 rounded-md z-10 relative w-80 md:w-96 gap-x-2 ">
            <Input 
            type="text" 
            value={input} 
            placeholder="Search stock ..." 
            onChange={(e) => {setInput(e.target.value)}}
            className="w-full px-4 py-2 focus:outline-none rounded-md shadow-md"
            onKeyUp={(e) => {
                if(e.key === "Enter") updateBestMatches() ;
            }}>

            </Input>

            {input && <Button onClick={clear} className="m-1"><X/></Button>}

            <Button onClick={updateBestMatches} className="shadow-md">
                <Search/>
            </Button>

            {input && bestMatches.length > 0 ? (<SearchResults results={bestMatches} setResults={updateBestMatches} setInput = {setInput}/>) : null}   
    </div>
    );
}
 
export default SearchComponent;