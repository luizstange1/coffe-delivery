import { useAdminCheck } from "../../hooks";

type Children = {
  children: React.ReactNode;
};

export function AdminProtectedRoute({ children }: Children) {
  const { isAuthorized } = useAdminCheck();

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
