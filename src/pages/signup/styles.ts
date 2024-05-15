import styled from "styled-components";
import backgroundWhite from "../../assets/BackgroundSign.png";
import { Divider } from "antd";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundWhite});
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

    label {
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        color: var(--blue-primary);
        font-size: 2rem;
      }
    }

    svg {
      cursor: pointer;
    }
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

  a {
    color: var(--white-primary);
  }
`;
