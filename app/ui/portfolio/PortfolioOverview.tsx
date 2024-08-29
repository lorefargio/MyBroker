'use client'
import { useEffect, useState } from "react";
import { getPortfolio } from "../../../actions/portfolio";
import { Portfolio } from "../TradingDashboard/mockdata";
import PortfolioPerformance from "./PortfolioPerformance";

import {columns} from "./DataTable/columns"
import { DataTable } from "./DataTable/data-table";
import DashboardCard from "../TradingDashboard/Dashboard-card";

const PortfolioOverview = () => {
    const baseCasePortfolio : Portfolio = {
        stocks : [],
        etfs : [],
        crypto : [],
    }
    const [data, setData] = useState<Portfolio>(baseCasePortfolio) ;

    useEffect(() => {
        const getportfolio = async () => {
            const response = await getPortfolio()
            
            setData(response) ;
        }

        getportfolio()
    },[])

    return (
        <DashboardCard>
            <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-4 sm:p-6 md:p-10">

                <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
                    <PortfolioPerformance portfolio={data}/>
                </div>

                {(data.stocks.length != 0 || data.etfs.length != 0 || data.crypto.length != 0 )&&<>
                
                    {(data.stocks.length != 0)&&<>
                        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-5">
                            <h1 className="font-bold">Stocks</h1> 
                            <DataTable columns={columns} data={data.stocks}/>
                        </div>
                    </>}

                    {(data.etfs.length != 0)&&<>
                        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-5">
                            <h1 className="font-bold">ETF</h1> 
                            <DataTable columns={columns} data={data.etfs}/>
                        </div>
                    </>}
                    
                    {(data.crypto.length != 0)&&<>
                        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-5">
                            <h1 className="font-bold">Crypto</h1> 
                            <DataTable columns={columns} data={data.crypto}/>
                        </div>
                    </>}

                </>}

                {(data.stocks.length == 0 && data.etfs.length == 0 && data.crypto.length == 0) && <>
                    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-5">
                        <h1 className="font-bold text-2xl">Your portfolio is empty, add credit to your account and start investing</h1>
                    </div>
                </>}
            </div>
        </DashboardCard> 
     );
}
 
export default PortfolioOverview;