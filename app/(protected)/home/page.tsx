import { CryptoMarketCard } from "../../ui/TV/crypto-market-card";
import { MarketOverviewCard } from "../../ui/TV/market-overview-card";
import { NewsCard } from "../../ui/TV/news-card";
import { StockMarketCard } from "../../ui/TV/stock-market-card";

const HomePage = async () => {
    

    return ( 
        <div className="md:container md:mx-auto">
            <div className="flex flex-wrap -mx-4 gap-y-4 md:gap-y-0 ">

                <div className="w-full md:w-1/3 px-4">
                   {false&&<MarketOverviewCard/>}
                </div>

                <div className="w-full md:w-1/3 px-4 ">
                    {false && <NewsCard/>}
                </div>

                <div className="w-full md:w-1/3 px-4 ">
                   { false && <StockMarketCard/>}
                </div>
            </div>

            <div className="w-full px-4 mt-4">
                   {false && <CryptoMarketCard/>}
            </div>

        </div>
     );
}
 
export default HomePage;