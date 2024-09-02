//this file contains the definition of some types used to display data coming from the API

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