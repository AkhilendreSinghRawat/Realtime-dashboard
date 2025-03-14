export interface FirebaseValueType {
  lastPrice: number;
  change: number;
  chartData: {
    time: string;
    price: number;
  }[];
  pair: string;
}
