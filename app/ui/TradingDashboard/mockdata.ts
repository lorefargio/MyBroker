export const MockTwelve = {
	"meta": {
		"symbol": "AAPL",
		"interval": "1h",
		"currency": "USD",
		"exchange_timezone": "America/New_York",
		"exchange": "NASDAQ",
		"mic_code": "XNGS",
		"type": "Common Stock"
	},
	"values": [
		{
			"datetime": "2024-08-20 15:30:00",
			"open": "226.48000",
			"high": "226.92999",
			"low": "226.39000",
			"close": "226.49001",
			"volume": "2581538"
		},
		{
			"datetime": "2024-08-20 14:30:00",
			"open": "227.03000",
			"high": "227.06000",
			"low": "226.19000",
			"close": "226.48500",
			"volume": "2299219"
		},
		{
			"datetime": "2024-08-20 13:30:00",
			"open": "226.70000",
			"high": "227.11000",
			"low": "226.35001",
			"close": "227.01500",
			"volume": "1991274"
		},
		{
			"datetime": "2024-08-20 12:30:00",
			"open": "226.89500",
			"high": "227.09000",
			"low": "226.11000",
			"close": "226.71001",
			"volume": "2086631"
		},
		{
			"datetime": "2024-08-20 11:30:00",
			"open": "226.20500",
			"high": "227.09500",
			"low": "226.09000",
			"close": "226.89999",
			"volume": "2572227"
		},
		{
			"datetime": "2024-08-20 10:30:00",
			"open": "226.67999",
			"high": "226.69000",
			"low": "225.71001",
			"close": "226.21001",
			"volume": "3611714"
		},
		{
			"datetime": "2024-08-20 09:30:00",
			"open": "225.77000",
			"high": "227.17000",
			"low": "225.45000",
			"close": "226.66000",
			"volume": "7693400"
		}
	]
}

export interface TimeLineMeta {
  symbol?: string;
  interval?: string;
  currency?: string;
  exchange_timezone?: string;
  exchange?: string;
  mic_code?: string;
  type?: string;
}

export interface TimeLineValue {
  datetime?: string;
  open?: string;
  high?: string;
  low?: string;
  close?: string;
  volume?: string;
}

export interface TimeLine {
    meta? : TimeLineMeta,
    values?: TimeLineValue[],
}

export interface DetailsInterface {
  symbol?: string, 
  instrument_name?  : string,
  country? : string,
  currency?: string,
  exchange?: string,
  instrument_type?: string,
  mic_code?: string
}

export interface PriceTabInterface {
  symbol: string,
  pc: number,
  d: number,
  dp: number,
}

export interface PriceTabProp {
  symbol: string,
  price: number,
  change: number,
  changePercent: number,
}

export interface ChartData {
    value?: string,
    date?: string,
}

export interface Product {
    id : string,
    symbol : string,
    quantity : number,
    money : number,
	current_value? : number,
	change? : number,
}

export interface Portfolio {
  stocks : Product[],
  etfs : Product[],
  crypto : Product[],
}