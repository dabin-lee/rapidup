export interface PaginationReqDTO {
    take?: number;
    skip?: number;
    orderByField?: string;
    orderBySort?: string;
}
