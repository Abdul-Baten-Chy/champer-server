export type Tproducts = {
  name: string;
  price: number;
  sizes: string[];
  rating: number;
  category: string;
  quantity: number;
  description: string;
  brand: string;
  images: string[];
  isFeatured: boolean;
};

export type queryOBj = {
  category: string;
  price?: object;
};
