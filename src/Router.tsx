import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts";
import { AdminProtectedRoute, DefaultLayout } from "./layouts";
import {
  Administration,
  Checkout,
  Home,
  SignIn,
  SignUp,
  Success,
} from "./pages";

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

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <Administration />
          </AdminProtectedRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/usuario/cadastro" element={<SignUp />} />
    </Routes>
  );
}
