export const CURRENCY = {
  CNY: 'CNY',
  USD: 'USD',
};

export type CURRENCY = typeof CURRENCY[keyof typeof CURRENCY];
