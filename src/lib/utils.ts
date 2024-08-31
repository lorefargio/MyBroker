import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Portfolio, TimeLine } from "../../app/ui/TradingDashboard/mockdata";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDateToUnixTimestamp(date : Date): number{
  return Math.floor(date.getTime()/1000) ;
}

export function convertUnixTimestampToDate(unixTimestamp : number) : string {
  const millisecond = unixTimestamp * 1000 ;
  return new Date(millisecond).toLocaleDateString() ;
}

export function getDates(days: number = 0, weeks: number = 0, months: number = 0, years: number = 1): [string, string] {

  const date = new Date() ;

  // Get the formatted current date
  const todayFormatted = formatDate(date);

  // Create a new date object for the custom date
  const customDate = new Date(date);

  // Adjust the date based on the input parameters
  customDate.setDate(customDate.getDate() - days); 
  customDate.setDate(customDate.getDate() - (weeks * 7)); 
  customDate.setMonth(customDate.getMonth() - months);
  customDate.setFullYear(customDate.getFullYear() - years);

  // Format the custom date
  const customDateFormatted = formatDate(customDate);

  return [todayFormatted, customDateFormatted];
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function FormatTimeLine(startDate : string, timeLine : TimeLine) : TimeLine {
    timeLine.values?.reverse() ;

    const filterDate = new Date(startDate);
    
    const newTimelineValues = timeLine.values?.filter((item : any) => {
      const objDate = new Date(item.datetime) ;
      return objDate >= filterDate
    })

    timeLine.values = newTimelineValues ;
    return timeLine ;
} 

export function FormatMoney(credit : number | undefined) : string {
  let creditFixed = 0
  let millionare = false ;
  let billionare = false ;

  if(credit) creditFixed = credit 

  if(creditFixed >= 100_000 && creditFixed < 1_000_000_000){
    creditFixed = creditFixed/1_000_000 ;
    millionare = true ;
  }

  if(creditFixed >= 1_000_000_000 ){
    creditFixed = creditFixed/1_000_000_000 ;
    billionare = true ;
  }

  return `${credit ? creditFixed.toFixed(3) : 0} ${millionare ? " M" : billionare ? " B" : ""}$`
}

export function addUpAllMoney (portfolio : Portfolio) : {moneySpent : number, CurrentTotalValue : number} {
  let moneySpent = 0 ;
  let CurrentTotalValue = 0 ;

  for(let stock of portfolio.stocks){
    moneySpent += stock.money ;
    CurrentTotalValue += stock.quantity * stock.current_value! ;
  }

  for(let etf of portfolio.etfs){
    moneySpent += etf.money ;
    CurrentTotalValue += etf.quantity * etf.current_value! ;
  }

  for(let token of portfolio.crypto){
    moneySpent += token.money ;
    CurrentTotalValue += token.quantity * token.current_value! ;
  }

  return {moneySpent,CurrentTotalValue} ;
}

export function urlB64ToUint8Array(base64String: string): Uint8Array {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding)
		.replace(/\-/g, "+")
		.replace(/_/g, "/");
	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);
	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}