import { ReactNode, createContext, useState } from "react";
import { CartContextType, InfoCep, OrderSummary, Product } from "./types";

interface CartContextProviderProps {
  children: ReactNode;
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
