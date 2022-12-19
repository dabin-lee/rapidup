import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductItem } from "../components/ProductItem";
import { instance } from "../hooks/axios";
import { PaginationResDTO } from "../ts/pagination.res.dto";
import { GetProductListDTO } from "../ts/get_product_list.res.dto";
import { BehaviorSubject, debounceTime } from "rxjs";
import { useFetchTitle } from "../hooks/useFetchData";
import { ItemModal } from "../components/itemModal";
import { inputState } from "../atom/state.atom";
import { useRecoilState } from "recoil";

interface IitemInfo {
    // - Req DTO: SearchProductListDTO
    // - Res DTO :  PaginationResDTO<GetProductListDTO>
    id: number;
    title: string;
}
const inputChange = new BehaviorSubject<IitemInfo>({} as IitemInfo);
const inputChange$ = inputChange.asObservable();
export const Main = () => {
    const fetchData = async () => {
        let url = `/product/list`;
        const res = await instance.get(url);
        return res.data;
    };

    const [editBox, setEditBox] = useRecoilState(inputState);

    const { data, isFetching, isLoading } = useQuery<
        PaginationResDTO<GetProductListDTO>
    >(["productList"], fetchData, {
        refetchOnWindowFocus: false,
    });
    console.log("data: ", data);
    // console.log("isLoading: ", isLoading, "isFetching: ", isFetching);

    const { mutate: changTit } = useFetchTitle();
    const onInputChange = (e: any) => {
        inputChange.next(e);
    };
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
            });

        return () => {
            return subscription.unsubscribe();
        };
    }, []);

    return (
        <>
            <h2>Product List</h2>
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
        </>
    );
};
