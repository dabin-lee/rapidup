import { OptionModel } from "./model/option.model";
import { ProductModel } from "./model/product.model";

export type GetProductListDTO = ProductModel & {
    optionList: OptionModel[];
};
