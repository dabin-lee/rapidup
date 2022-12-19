import React from "react";
import { GetProductListDTO } from "../ts/get_product_list.res.dto";

interface IproductLitsDTO {
    item: GetProductListDTO;
}
export const ProductsDetails = ({ item }: IproductLitsDTO) => {
    return <div>{item.addedPrice}</div>;
};
