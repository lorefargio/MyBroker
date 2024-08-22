import { useState, useEffect, useContext } from "react";
import {ChartData, mockStockQuote, MockTwelve, TimeLine} from "./mockdata";
import { convertUnixTimestampToDate, convertDateToUnixTimestamp, getDates, FormatTimeLine,} from "@/lib/utils";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
    XAxis,
    YAxis
} from "recharts"
import DashboardCard from "./Dashboard-card";
import ChartFilter from "./ChartFilter";
import SymbolContext from "@/context/SymbolContext";
import { getHistoricalData } from "@/api/twelvedata/time-series-api";


const ChartConfig = {
    "1D" : {days: 1, week: 0, months: 0, years: 0, resolution: "1"},
    "1W" : {days: 0, week: 1, months: 0, years: 0, resolution: "15"},
    "1M" : {days: 0, week: 0, months: 1, years: 0, resolution: "60"},
    "1Y" : {days: 0, week: 0, months: 0, years: 1, resolution: "D"},
}

type FilterType = "1D" | "1W" | "1M" | "1Y";

const Chart = () => {
    
    const formatData = (data: any, startDate: string) : ChartData[] | undefined=> {
       
        const datatwo = FormatTimeLine(startDate,data) ;
        
        return datatwo.values?.map((item : any) => {
            return {
                value: Number(item.close).toFixed(2),
                date: item.datetime
            }
        })
    }

    const baseCaseData : ChartData[] = [{}]


    const [data, setData] = useState<ChartData[]>(baseCaseData);
    const [filter, setFilter] = useState<FilterType>("1W") ;

    const {symbol} = useContext(SymbolContext) ;

    useEffect(()=>{
        const getDateRange = () => {
            const {days, week, months, years} = ChartConfig[filter] ;

            const [endDate, startDate] = getDates(days,week,months,years) ;

            return startDate ;
        } ;

        const updateChartData = async () => {
            try {
               const startDate = getDateRange() ;

               const result = await getHistoricalData(symbol) ;

               const formattedData = formatData(result,startDate) ;

               setData(formattedData as ChartData[]) ;
            } catch (error) {
                setData(baseCaseData)
                console.log(error)
            }
        }
        updateChartData() ;
    },[symbol, filter])


    return ( 
        <DashboardCard>
            <ul className="flex absolute top-2 right-2 z-40 bg-gray-">
                {Object.keys(ChartConfig).map((item) => {
                    return(
                    <li key={item}>
                            <ChartFilter text={item} active={filter === item} onClick={() => {setFilter(item as FilterType)} }/>
                    </li>
                    )
                })}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={data}>

                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                <Area 
                type="monotone"
                dataKey="value"
                stroke="#312e81"
                fillOpacity={1}
                strokeWidth={0.5}
                fill="url(#colorPv)"
                />
                <Tooltip/>
                <XAxis dataKey={"date"}/>
                <YAxis domain={["dataMin-10", "dataMax +10"]}/>
                </AreaChart>
            </ResponsiveContainer>
        </DashboardCard>
     );
}
 
export default Chart;
<div>

</div>