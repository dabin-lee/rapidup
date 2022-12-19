export type UserModel = {
    id: number;
    password: string;
    name: string;
    phone: string;
    email: string;
    isAdmin: boolean;
    expiredDate: Date;
    recommender?: string;
    joinDate: Date;
    createdAt: Date;
    imageTranslateCount?: number;
};
