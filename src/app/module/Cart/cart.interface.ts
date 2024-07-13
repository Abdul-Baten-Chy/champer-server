export type Tcart = {
  id: string;
  quantity: number;
  address: string;
  email: string;
  name: string;
  userProductInfo: Cart[];
  userTotalPay: number;
};

export type Cart = {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  subTotal: number;
};
