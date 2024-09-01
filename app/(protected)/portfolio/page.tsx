"use client"

import PortfolioOverview from "../../ui/portfolio/PortfolioOverview";
import { useState, useEffect, useTransition } from "react";
import { getPortfolio } from "../../../actions/portfolio";
import { Portfolio } from "./../../ui/TradingDashboard/mockdata"

const PortfolioPage = () => {
    const baseCasePortfolio : Portfolio = {
        stocks : [],
        etfs : [],
        crypto : [],
    }
    const [data, setData] = useState<Portfolio>(baseCasePortfolio) ;
    const [isPending, startTransition] = useTransition() ;
    useEffect(() => {
        startTransition(() => {
            const getportfolio = async () => {
                try {
                    const response = await getPortfolio()
                
                    setData(response) ;   
                } catch (error) {
                    console.log(error)
                    setData(baseCasePortfolio) ;
                }
            }
    
            getportfolio()
        })
    },[])
    return ( 
          <PortfolioOverview data={data} isPending={isPending}/>
    );
}
 
export default PortfolioPage;