import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly origin: string,
    readonly slogan: string,
    readonly genre: string,
    readonly length: number
  ) {}
}
