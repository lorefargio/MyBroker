import { BalanceButton } from "../button";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { Portfolio } from "../TradingDashboard/mockdata";



const PortfolioPerformance = ({portfolio} : {portfolio : Portfolio}) => {
    const user = useCurrentUser()
    return ( 
        <>
            <BalanceButton credit={user?.credit}/>
        </>
     );
}
 
export default PortfolioPerformance;