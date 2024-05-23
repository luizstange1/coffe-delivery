import { Route, Routes } from "react-router-dom";
import { Checkout, Home, Success } from "./pages";
import { DefaultLayout } from "./layouts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="sucesso" element={<Success />} />
      </Route>
    </Routes>
  );
}
