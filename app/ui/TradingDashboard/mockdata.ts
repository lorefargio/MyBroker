export const mockSearchResults = {
    "count": 4,
    "result": [
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL",
        "symbol": "AAPL",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL.SW",
        "symbol": "AAPL.SW",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.BE",
        "symbol": "APC.BE",
        "type": "Common Stock"
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.DE",
        "symbol": "APC.DE",
        "type": "Common Stock"
      }
    ]
}

export const mockCompanyDetails = {
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "weburl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
}

export const mockStockQuote = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
}

export const mockHistoricalData = {
    "c": [
      1.10713,
      1.20288,
      1.30397,
      1.230182
    ],
    "h": [
      1.1074,
      1.10751,
      1.10729,
      1.10595
    ],
    "l": [
      1.09897,
      1.1013,
      1.10223,
      1.10101
    ],
    "o": [
      1.0996,
      1.107,
      1.10269,
      1.10398
    ],
    "s": "ok",
    "t": [
      1568667600,
      1568754000,
      1568840400,
      1568926800
    ],
    "v": [
      75789,
      75883,
      73485,
      5138
    ]
}

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
  name?  : string,
  country? : string,
  currency?: string,
  exchange?: string,
  ipo?: string,
  marketCapitalization?: number,
}

export interface PriceTabInterface {
  pc? : number,
  d? : string,
  dp? : string,
}

export interface ChartData {
    value?: string,
    date?: string,
}