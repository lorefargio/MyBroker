import { BalanceButton } from "../button";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { Portfolio } from "../TradingDashboard/mockdata";
import { addUpAllMoney, FormatMoney } from "@/lib/utils";


const PortfolioPerformance = ({portfolio} : {portfolio : Portfolio}) => {
    const user = useCurrentUser()
    const {moneySpent,CurrentTotalValue} = addUpAllMoney(portfolio) ;
    return ( 
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">Hi {user?.name} this is your Portfolio</span>
                    <span>Here you can see the overall performance of the portfolio and your individual assets</span>
                </div>
                <BalanceButton credit={user?.credit}/>
            </div>

            <div className="flex text-lg md:justify-between">
                <div className="flex flex-col space-y-3">
                    <div>
                        <span>This is the total of the money spent on your asset :</span> <span className="font-bold">{FormatMoney(moneySpent)}</span>
                    </div>

                    <div>
                        <span>This is the current value of the asset you own :</span> <span className="font-bold">{FormatMoney(CurrentTotalValue)}</span>
                    </div>
                    
                </div>

                <div>
                    <span>The current overall return of your portfolio is : </span>
                    <span className={CurrentTotalValue > moneySpent ? "text-lime-500" : "text-red-500"}>{moneySpent ? (((CurrentTotalValue - moneySpent)/moneySpent)*100).toFixed(2) : 0} %</span>
                </div>
            </div>

        </div>
     );
}
 
export default PortfolioPerformance;