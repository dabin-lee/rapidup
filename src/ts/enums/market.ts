export const MARKET = {
  SMART_STORE: {
    value: 'SMART_STORE',
    label: '스마트 스토어',
    key: 'smartStoreId',
    url: 'https://smartstore.naver.com/',
    categoryKey: 'categoryId',
    errorKey: 'smartstoreFailLog',
  },
  ST11: {
    value: 'ST11',
    label: '11번가',
    key: 'st11Id',
    url: 'http://www.11st.co.kr/products/',
    categoryKey: 'st11CategoryId',
    errorKey: 'st11FailLog',
  },
  ST11_GLOBAL: {
    value: 'ST11_GLOBAL',
    label: '11번가 글로벌',
    key: 'st11AbroadId',
    url: 'http://www.11st.co.kr/products/',
    categoryKey: 'st11AbroadCategoryId',
    errorKey: 'st11AbroadFailLog',
  },
  GMARKET: {
    value: 'GMARKET',
    label: '지마켓',
    key: 'gmarketId',
    url: 'http://item.gmarket.co.kr/Item?goodscode=',
    categoryKey: 'gmarketCategoryId',
    errorKey: 'gmarketFailLog',
  },
  AUCTION: {
    value: 'AUCTION',
    label: '옥션',
    key: 'auctionId',
    url: 'http://itempage3.auction.co.kr/DetailView.aspx?ItemNo=',
    categoryKey: 'auctionCategoryId',
    errorKey: 'auctionFailLog',
  },
  GMARKET_V2: {
    value: 'GMARKET_V2',
    label: '지마켓 2.0',
    key: 'gmarketId',
    url: 'http://item.gmarket.co.kr/Item?goodscode=',
    categoryKey: 'gmarket2CategoryId',
    errorKey: 'gmarketFailLog',
  },
  AUCTION_V2: {
    value: 'AUCTION_V2',
    label: '옥션 2.0',
    key: 'auctionId',
    url: 'http://itempage3.auction.co.kr/DetailView.aspx?ItemNo=',
    categoryKey: 'auction2CategoryId',
    errorKey: 'auctionFailLog',
  },
  COUPANG: {
    value: 'COUPANG',
    label: '쿠팡',
    key: 'coupangId',
    url: 'https://www.coupang.com/vp/products/',
    categoryKey: 'coupangCategoryId',
    categoryList: {} as any,
    errorKey: 'coupangFailLog',
  },
  INTERPARK: {
    value: 'INTERPARK',
    label: '인터파크',
    key: 'interparkId',
    url: 'https://www.coupang.com/vp/products/',
    categoryKey: 'interparkCategoryId',
    errorKey: 'interparkFailLog',
  },
} as const;

export type MARKET = typeof MARKET[keyof typeof MARKET];
export type MARKET_KEYS = keyof typeof MARKET;

export const MARKET_LIST = Object.values(MARKET);
