export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        id: string;
        url: string;
      }[];
    };
  };
};
export type TMenu = {
  id: string;
  title: string;
  url: string;
};

type Images = { id: string; url: string };
export type TBanner = {
  images: Images[];
  titles: string[];
};

export type Price = {
  amount: string;
};

export type Product = {
  name: string;
  url: string;
  price: Price;
  compareAtPrice: Price | null;
  isOnSale: boolean;
};
