import { useState } from "react";
import { getUserData } from "../services/users";

interface userDataProps {
  name: string;
  surname: string;
  is_administrator: boolean;
}

export function useUser() {
  const [userData, setUserData] = useState<userDataProps | null>(null);

  async function fetchUserData() {
    try {
      const userId = localStorage.getItem("userId");

      if (userId !== null) {
        const response = await getUserData(userId);
        setUserData(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { userData, fetchUserData };
}
