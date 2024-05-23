import { Outlet } from "react-router-dom";
import * as S from "./styles";
import { Header } from "../../components";

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
