import { useState } from "react";
import { Button, Modal, Input } from "antd";
import { IModalprops } from "../ts/modal.props.dto";
import { useFetchTitle } from "../hooks/useFetchData";

export const ItemModal = ({ item, open, setOpen }: IModalprops) => {
    const [loading, setLoading] = useState(false);
    const [chgTitInModal, setChgTitInModal] = useState("");
    const { mutate: changTit, isError, isSuccess } = useFetchTitle();
    if (isSuccess) {
        console.log("Success");
    }
    if (isError) {
        console.log("Error");
    }
    const handleOk = (item: any) => {
        setLoading(true);
        changTit({
            id: item.id,
            title: chgTitInModal,
        });
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 2000);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            title={item.title}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Return
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={() => handleOk(item)}
                    className="bg-sky-600"
                >
                    Submit
                </Button>,
            ]}
        >
            <div className="flex gap-4">
                <img
                    src={item.selectedThumbnailUrl}
                    alt="img"
                    className="w-2/5"
                />
                <Input
                    type="text"
                    placeholder={`현재 상품명: ${item.title}`}
                    value={chgTitInModal}
                    onChange={(e) => setChgTitInModal(e.target.value)}
                />
            </div>
        </Modal>
    );
};
