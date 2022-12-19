import { atom } from "recoil";

export const modalState = atom({
    key: "modalState",
    default: false,
});

export const inputState = atom({
    key: "inputState",
    default: false,
});