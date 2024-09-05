import styled, { css } from "styled-components";

interface ContainerProps {
  isBlurred: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 4rem 20rem;
  row-gap: 2rem;
  transition: filter 0.3s ease;

  ${({ isBlurred }) =>
    isBlurred &&
    css`
      filter: blur(3px);
    `}
`;

export const WrapperTitleAndAddNewProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.base.subtitle};
`;

export const AddNewProductButton = styled.button`
  display: flex;
  column-gap: 0.25rem;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow.default};
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

export const Table = styled.table`
  border-collapse: separate;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  border-spacing: 0 1rem;
`;

export const THead = styled.thead`
  background-color: ${(props) => props.theme.base.card};
  height: 3rem;
`;

export const Tr = styled.tr`
  text-align: left;
`;

export const Th = styled.th`
  color: ${(props) => props.theme.base.text};
  padding-left: 1rem;
`;

export const TBody = styled.tbody`
  background-color: ${(props) => props.theme.base.card};
`;

export const Td = styled.td`
  padding-left: 1rem;
  height: 3rem;
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.purple.default};
  color: ${(props) => props.theme.white};
  margin-right: 0.25rem;
  border-radius: 9999px;
  padding: 0 0.5rem;
  line-height: 0.5;
  font-size: 0.9rem;
`;

export const ImagePreview = styled.img`
  height: 2rem;
  width: 2rem;
  display: flex;
`;

export const DeleteProductButton = styled.button`
  transition: 0.2s ease-in-out;
  display: flex;

  :hover {
    color: ${(props) => props.theme.red};
  }
`;
