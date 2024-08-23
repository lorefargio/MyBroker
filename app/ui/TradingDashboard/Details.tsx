import { DetailsInterface } from "./mockdata"
import DashboardCard from "./Dashboard-card"
const detailsList : DetailsInterface = {
    instrument_name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    instrument_type: "Instrument type",
    mic_code: ""
}
// da aggiustare quando connessa api  levare any e far arrivare i dati direttamente secondo l'interfaccia 

const Details = ({details}: {details : DetailsInterface}) => {
    
    return (
        <DashboardCard>

            <ul className="w-full h-full flex flex-col justify-between divide-y-2">
                {Object.keys(detailsList).map((item) => {
                    return <li key={item} className="flex-1 flex justify-between items-center">
                        <span>{detailsList[item as keyof DetailsInterface]}</span>
                        
                        <span>{
                            item == "mic_code" ? false : details[item as keyof DetailsInterface]
                        }</span>
                    </li>
                })}
            </ul>
            
        </DashboardCard>
    );
}
 
export default Details;