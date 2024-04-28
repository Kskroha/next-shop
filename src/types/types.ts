type Product = {
  name: string;
  price: number;
  discount: number;
  description: string;
  images: string[];
  categoryId: number;
  sku: number;
  reviews: { name: string; rating: number; date: Date; desription: string }[];
};
