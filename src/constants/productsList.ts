import * as ProductsImages from "../assets/products";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../contexts/CartContext/types";

export const productsList: Product[] = [
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
