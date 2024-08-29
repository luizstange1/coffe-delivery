export interface Product {
  id: string;
  tag: string;
  name: string;
  details: string;
  price: number;
  image_path: any;
  quantity: number;
}

export interface InfoCep {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface OrderSummary {
  cartProducts: Product[];
  infoCep: InfoCep | null;
  residenceNumber: number | undefined;
  formOfPayment: string;
}

export interface CartContextType {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeToCart: (product: Product) => void;
  infoCep: InfoCep | null;
  setInfoCep: (info: InfoCep) => void;
  residenceNumber: number | undefined;
  setResidenceNumber: (num: number | undefined) => void;
  formOfPayment: string;
  setFormOfPayment: (payment: string) => void;
  orderSummary: OrderSummary;
  setOrderSummary: (summary: OrderSummary) => void;
  orderConfirmed: boolean;
  setOrderConfirmed: (orderConfirmed: boolean) => void;
}
