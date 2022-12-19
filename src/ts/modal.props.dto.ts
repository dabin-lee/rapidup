import { GetProductListDTO } from "./get_product_list.res.dto";
import React, { Dispatch, SetStateAction } from "react";

export interface IModalprops {
    item: GetProductListDTO;
    // changTit: any;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
