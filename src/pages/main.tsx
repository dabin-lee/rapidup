import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "../components/ProductItem";
import { instance } from "../hooks/axios";
import { PaginationResDTO } from "../ts/pagination.res.dto";
import { GetProductListDTO } from "../ts/get_product_list.res.dto";
import { BehaviorSubject, debounceTime } from "rxjs";
import { useFetchTitle } from "../hooks/useFetchData";

import { useRecoilState } from "recoil";
import { openEditBox } from "../atom/state.ataom";

interface IitemInfo {
    // - Req DTO: SearchProductListDTO
    // - Res DTO :  PaginationResDTO<GetProductListDTO>
    id: number;
    title: string;
}
const inputChange = new BehaviorSubject<IitemInfo>({} as IitemInfo);
const inputChange$ = inputChange.asObservable();
const fetchData = async () => {
    let url = `/product/list`;
    const res = await instance.get(url);
    return res.data;
};
export const Main = () => {
    const { data, isFetching, isLoading } = useQuery<
        PaginationResDTO<GetProductListDTO>
    >(["productList"], fetchData, {
        refetchOnWindowFocus: false,
    });
    // console.log("isLoading: ", isLoading, "isFetching: ", isFetching);

    const { mutate: changTit } = useFetchTitle();
    const onInputChange = (e: any) => {
        inputChange.next(e);
    };
    const [editBox, setEditBox] = useRecoilState(openEditBox);
    useEffect(() => {
        const subscription = inputChange$
            .pipe(debounceTime(1000))
            .subscribe((value) => {
                // console.log("value: ", value);
                // doQuery(value);
                changTit({
                    id: value.id,
                    title: value.title,
                });
                setEditBox(false);
            });

        return () => {
            return subscription.unsubscribe();
        };
    }, [inputChange]);

    return (
        <div className="p-3">
            <h2>상품 목록</h2>
            <div className="flex">
                <div>
                    {data?.list?.map((item) => (
                        <ProductItem
                            key={item.id}
                            item={item}
                            onInputChange={onInputChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
