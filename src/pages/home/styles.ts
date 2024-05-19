import { Divider } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media (min-width: 426px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 100dvw;
    height: 100dvh;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  @media (min-width: 426px) and (max-width: 1023px) {
    width: 80%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 80%;
    height: 100%;
  }
`;

export const NavbarArea = styled.div`
  display: none;
  @media (min-width: 426px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Line = styled(Divider)`
  .ant-divider {
    color: var(--blue-primary) !important;
  }
`;

export const PrincipalContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 90%;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 426px) and (max-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductArea = styled.div`
  background: var(--white-secondary);
  padding: 1rem;
  border-radius: 1rem;
  width: 50%;
  height: 100%;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  display: flex;
  flex-direction: column;

  gap: 12px;
`;

export const ProductAreaTitle = styled.div`
  h3 {
    font-size: 1.5rem;
    color: var(--blue-primary);
  }

  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const ProductAreaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductDots = styled.div`
  display: flex;
  justify-content: center;
`;

export const StatusArea = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 426px) and (max-width: 1023px) {
    width: 100%;
    height: 100dvh;
  }
  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
  }
`;

export const AreaOne = styled.div`
  background: var(--white-secondary);
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 426px) and (max-width: 1023px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1024px) {
    height: 100%;
    width: 60%;
  }
`;

export const AreaTwo = styled.div`
  background: var(--white-secondary);
  height: 100%;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const RegisterSellerArea = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 426px) and (max-width: 1023px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
  }
`;

export const DataArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 80%;
  gap: 2rem;

  @media (min-width: 426px) and (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonArea = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 1rem;
  background: var(--white-secondary);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  @media (min-width: 426px) and (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
