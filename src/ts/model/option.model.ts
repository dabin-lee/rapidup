export type OptionModel = {
  id: number;
  productId: number;
  title: string;
  rawTitle: string;
  price: number;
  rawPrice: number;
  imageUrls: string[];
  enabled: boolean;
  translatedTitle: string;
  coupangOptionId?: boolean;
  auctionId?: boolean;
  gmarketId?: boolean;
  auctionEsmId?: boolean;
  gmarketEsmId?: boolean;
};
