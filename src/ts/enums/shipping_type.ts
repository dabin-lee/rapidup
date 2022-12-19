export const SHIPPING_TYPE = {
  free: 'free',
  charge: 'charge',
  charge_each: 'charge_each',
};

export type SHIPPING_TYPE = typeof SHIPPING_TYPE[keyof typeof SHIPPING_TYPE];
