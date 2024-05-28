import { Navigate, Route, Routes } from "react-router-dom";
import { Checkout, Home, Success } from "./pages";
import { DefaultLayout } from "./layouts";
import { useContext } from "react";
import { CartContext } from "./contexts";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const { orderConfirmed } = useContext(CartContext);
  return orderConfirmed ? <Component /> : <Navigate to="/" />;
};

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/sucesso"
          element={<ProtectedRoute component={Success} />}
        />
      </Route>
    </Routes>
  );
}
