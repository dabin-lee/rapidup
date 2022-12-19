import { GetProductListDTO } from "../ts/get_product_list.res.dto";
import { Button, Input } from "antd";
import { useFetchTitle } from "../hooks/useFetchData";
import { ItemModal } from "./itemModal";
import { useState } from "react";

interface IProductsProps {
    item: GetProductListDTO;
    onInputChange: any;
}

// export const Products = ({list}: {list:any}) => {
export const ProductItem = ({ item, onInputChange }: IProductsProps) => {
    const [open, setOpen] = useState(false);
    const { mutate: changTit, isLoading } = useFetchTitle();
    if (isLoading) {
        <p>isloading...</p>;
    }

    return (
        <div className="flex w-full h-14 mt-1 p-2 gap-4 items-center border">
            <img src={item.selectedThumbnailUrl} alt="img" width="25px" />
            <div className="flex w-full justify-between gap-2">
                <Input.Group compact>
                    <Input
                        className="w-3/4"
                        defaultValue={item.title}
                        onChange={(e) =>
                            onInputChange({
                                id: item.id,
                                title: e.target.value,
                            })
                        }
                    />
                </Input.Group>
                {/* {editBox ? (
                    <>
                        <Input.Group compact>
                            <Input
                                className="w-3/4"
                                defaultValue={item.title}
                                onChange={(e) =>
                                    onInputChange({
                                        id: item.id,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </Input.Group>
                    </>
                ) : (
                    <div onClick={() => setEditBox(true)} className="w-full">
                        <p>{item.title}</p>
                    </div>
                )} */}
                <Button onClick={() => setOpen(true)}>편집</Button>
                {/* <Button onClick={() => console.log(item.id)}>편집</Button> */}
                {open && (
                    <ItemModal item={item} open={open} setOpen={setOpen} />
                )}
            </div>
        </div>
    );
};
