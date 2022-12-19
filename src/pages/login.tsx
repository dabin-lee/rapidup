import React, { useState } from "react";
import { LoginResultDTO } from "../ts/login_result.res.dto";
import { instance } from "../hooks/axios";
import { useMutation } from "@tanstack/react-query";
import { LoginDTO } from "../ts/login.req.dto";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form } from "antd";

export const Login = () => {
    const [userId, setUserId] = useState("");
    const [passWord, setPassWord] = useState("");
    const navigate = useNavigate();

    const fetchUser = async (params: LoginDTO): Promise<LoginResultDTO> => {
        const { data } = await instance.post("/auth/login", params);
        return data;
    };
    const { mutate: login } = useMutation(fetchUser, {
        // 옵션
        onError: (err) => {
            alert("로그인 실패");
        },
        onSuccess: (res) => {
            localStorage.setItem("token", res.access_token);
            const token = localStorage.getItem("token");
            if (token) {
                alert("로그인 성공");
                navigate("/main");
            } else {
                navigate("/login");
            }
        },
        onSettled: () => {
            setUserId("");
            setPassWord("");
        },
    });

    interface handleValue {
        (e: React.ChangeEvent<HTMLInputElement>): void;
    }

    let chgName: handleValue;
    chgName = (e) => {
        setUserId(e.target.value);
    };

    let chgPassword: handleValue;
    chgPassword = (e) => {
        setPassWord(e.target.value);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                onFinish={() => {
                    const params: LoginDTO = {
                        name: userId,
                        password: passWord,
                    };
                    login(params);
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input value={userId} onChange={(e) => chgName(e)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        value={passWord}
                        onChange={(e) => chgPassword(e)}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
