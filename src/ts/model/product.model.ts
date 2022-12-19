import { CURRENCY } from "../enums/currency";
import { SHIPPING_TYPE } from "../enums/shipping_type";

export interface ProductModel {
    id: number;

    userId: number;

    rawTitle: string;

    title: string;

    categoryId: number;

    contentHtml: string;

    thumbnailUrls: string[];

    tags: string[];

    shippingType: SHIPPING_TYPE;

    shippingPrice: number;

    refundPrice: number;

    exchangePrice: number;

    lastEditedDate: Date;

    lastExcelExportedDate?: Date;

    optionConfirmed: boolean;

    tagConfirmed: boolean;

    contentConfirmed: boolean;

    excelExported: boolean;

    selectedThumbnailUrl: string;

    originalUrl: string;

    isDeleted: boolean;

    rawPrice?: string;

    currency: CURRENCY;

    json: any;

    includesOptionHtml: boolean;

    coupangId?: string;

    st11Id?: string;

    coupangCategoryId?: number;

    st11CategoryId?: number;

    auctionId?: string;

    gmarketId?: string;

    auctionEsmId?: string;

    gmarketEsmId?: string;

    auctionCategoryId?: string;

    gmarketCategoryId?: string;

    addedPrice?: number;

    smartStoreId?: string;

    smartStoreUrl?: string;

    interparkCategoryId?: string;

    interparkId?: string;

    lotteonCategoryId?: string;

    lotteonId?: string;

    talkstoreCategoryId?: string;

    talkstoreId?: string;

    talkstoreUrl?: string;

    exported: boolean;

    wemakepriceId?: string;

    wemakepriceCategoryId?: string;

    lotteonCategoryId2?: string;

    videoUrl?: string;

    coupangFailLog?: string;

    st11FailLog?: string;

    auctionFailLog?: string;

    gmarketFailLog?: string;

    smartstoreFailLog?: string;

    interparkFailLog?: string;

    talkstoreFailLog?: string;

    lotteonFailLog?: string;

    gmarketFaiwemakepriceFailLoglLog?: string;

    includesVideoToHtml?: boolean;

    videoMuted?: boolean;

    ohooImageIdMap: any;

    st11AbroadId?: string;

    st11AbroadCategoryId?: number;

    auction2CategoryId?: string;

    gmarket2CategoryId?: string;

    categoryName?: string;

    createdAt: Date;

    deletedAt: Date;
}
