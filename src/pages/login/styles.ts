import styled from "styled-components";
import backgroundBlue from "../../assets/Background Login.png";
import { Divider } from "antd";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundBlue});
  background-size: cover;
`;

export const FormArea = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;

  div {
    padding: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Line = styled(Divider)`
  .ant-divider {
    color: var(--white-primary) !important;
  }
`;

export const Link = styled.p`
  color: var(--white-primary);
  display: flex;
  gap: 8px;
  label {
    text-decoration: underline;
    cursor: pointer;
  }
`;
