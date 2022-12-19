import { ProductModel } from "./model/product.model";
import { PaginationReqDTO } from "./pagination.req.dto";

export type SearchProductListDTO = Partial<Pick<ProductModel, "title">> &
    PaginationReqDTO;

    // Partial: 모든 요소를 옵셔널로 변경한 타입
    // pick: 첫번째 인자로 받은 타입에서 두번째 인자로 주어진 속성만 사용