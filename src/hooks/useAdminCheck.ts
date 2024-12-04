import { useEffect, useState } from "react";
import { checkAdminPrivateRouteAcess } from "../services/users";
import { useNavigate } from "react-router-dom";

export function useAdminCheck() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAdminAcess() {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          throw new Error("Usuário não autenticado!");
        }

        const response = await checkAdminPrivateRouteAcess(userId, token);

        if (response?.data.isAdministrator) {
          setIsAuthorized(true);
        } else {
          throw new Error("Acesso negado!");
        }
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    checkAdminAcess();
  }, [navigate]);

  return { isAuthorized };
}
