import { ReactNode, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as ProductsImages from "../assets/products";

const productsList: Product[] = [
  {
    id: uuidv4(),
    image: ProductsImages.expressoTradicionalImg,
    tag: ["Tradicional"],
    name: "Expresso Tradicional",
    details: "O tradicional café feito com água quente e grãos moídos",
    price: 4,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.expressoAmericanoImg,
    tag: ["Tradicional"],
    name: "Expresso Americano",
    details: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.expressoCremosoImg,
    tag: ["Tradicional"],
    name: "Expresso Cremoso",
    details: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.expressoGeladoImg,
    tag: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    details: "Bebida preparada com café expresso e cubos de gelo",
    price: 7,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.cafeComLeiteImg,
    tag: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    details: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 6,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.latteImg,
    tag: ["Tradicional", "Com Leite"],
    name: "Latte",
    details: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.capuccinoImg,
    tag: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    details: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 8.5,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.macchiatoImg,
    tag: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    details: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.mocaccinoImg,
    tag: ["Tradicional", "Com Leite"],
    name: "Mocaccino",
    details: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.chocolateQuenteImg,
    tag: ["Especial", "Com Leite"],
    name: "Chocolate Quente",
    details: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.cubanoImg,
    tag: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    details: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 12.5,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.havaianoImg,
    tag: ["Especial"],
    name: "Havaiano",
    details: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.arabeImg,
    tag: ["Especial"],
    name: "Árabe",
    details: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    quantity: 0,
  },

  {
    id: uuidv4(),
    image: ProductsImages.irlandesImg,
    tag: ["Especial", "Alcoólico"],
    name: "Irlandês",
    details: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    quantity: 0,
  },
];

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  productsList: Product[];
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

export interface InfoCep {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface Product {
  id: string;
  image: string;
  tag: string[];
  name: string;
  details: string;
  price: number;
  quantity: number;
}

interface OrderSummary {
  cartProducts: Product[];
  infoCep: InfoCep | null;
  residenceNumber: number | undefined;
  formOfPayment: string;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [infoCep, setInfoCep] = useState<InfoCep | null>(null);
  const [residenceNumber, setResidenceNumber] = useState<number | undefined>(); //aqui eu fiz um state pro numero, porque na API nao retorna numero da casa certinho, eu preciso bloquear a finalização da compra caso o input de numero esteja vazio
  const [formOfPayment, setFormOfPayment] = useState("");
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    cartProducts: [],
    infoCep: null,
    residenceNumber: undefined,
    formOfPayment: "",
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  function addToCart(product: Product) {
    const productExistsInCart = cartProducts.find(
      (item) => item.id === product.id
    );

    if (productExistsInCart) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartProducts(updatedCart);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  }

  function removeToCart(product: Product) {
    const productExistsInCart = cartProducts.find(
      (item) => item.id === product.id
    );

    if (productExistsInCart) {
      const updatedCart = cartProducts
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0);

      setCartProducts(updatedCart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        productsList,
        addToCart,
        removeToCart,
        infoCep,
        setInfoCep,
        residenceNumber,
        setResidenceNumber,
        formOfPayment,
        setFormOfPayment,
        orderSummary,
        setOrderSummary,
        orderConfirmed,
        setOrderConfirmed,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
