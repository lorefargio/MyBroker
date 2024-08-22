import { DetailsInterface } from "./mockdata"
import DashboardCard from "./Dashboard-card"
const detailsList  = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalizaion",
}
// da aggiustare quando connessa api  levare any e far arrivare i dati direttamente secondo l'interfaccia 

const Details = ({details} : any) => {

    const convertMillionToBillion = (num : number) => {
        return (num / 1000).toFixed(2)
    }
    
    return (
        <DashboardCard>

            <ul className="w-full h-full flex flex-col justify-between divide-y-2">
                {Object.keys(detailsList).map((item) => {
                    return <li key={item} className="flex-1 flex justify-between items-center">
                        <span>{detailsList[item as keyof DetailsInterface]}</span>
                        
                        <span>{
                            item == "marketCapitalization" ? `${convertMillionToBillion(details[item as keyof DetailsInterface])}B` : details[item as keyof DetailsInterface]
                        }</span>
                    </li>
                })}
            </ul>
            
        </DashboardCard>
    );
}
 
export default Details;