import { MARKET } from "../enums/market";

export class CategoryModel {
    code!: string;
    market!: MARKET;
    firstName!: string;
    secondName!: string;
    thirdName!: string;
    fourthName?: string;
    fullName!: string;
}

export class CategoryByMarketModel {
    [key: string]: CategoryModel[];
}
