import { useEffect, useState } from "react";
import { getUserData } from "../services/users";

export function userUserData() {
  const [userIsAdministrator, setUserIsAdministrator] = useState(false);

  useEffect(() => {
    async function handleCheckUserPermission() {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {
          const response = await getUserData(userId);

          if (response.is_administrator) {
            setUserIsAdministrator(true);
          }
        } catch (error) {
          throw new Error("Usuário sem permissão");
        }
      }
    }

    handleCheckUserPermission();
  }, [userIsAdministrator]);

  return { userIsAdministrator };
}
