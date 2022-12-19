import { UserModel } from "./model/user.model";

export type LoginDTO = Pick<UserModel, "name" | "password">;
