import { instance } from "../hooks/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchTitle = async (params) => {
    const { data } = await instance.put(`/product/${params.id}`, params);
    return data;
};
export const useFetchTitle = () => {
    const QueryClient = useQueryClient();
    return useMutation(fetchTitle, {
        onSuccess: (data) => {
            // console.log("data: ", data);
            QueryClient.setQueryData(["productList"], (oldQueryData) => {
                const found = oldQueryData.list.find(
                    (item) => item.id === data.id
                );
                found.title = data.title;
            });
            QueryClient.invalidateQueries(["productList", data.id]);
        },
    });
};
