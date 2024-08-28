import BuyCard from "../../ui/TradingDashboard/buy-card";

const PortFolioPage = () => {
    return ( 
        <div className="w-[400px]">
            <BuyCard symbol="AAPL" price={100}/>
        </div>
    );
}
 
export default PortFolioPage;