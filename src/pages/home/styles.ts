import { Divider } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  width: 100dvw;
  height: 100dvh;
  padding: 1rem;
`;

export const Content = styled.section`
  width: 80%;
  height: 100%;
  padding: 1rem;
`;

export const Line = styled(Divider)`
  .ant-divider {
    color: var(--blue-primary) !important;
  }
`;

export const PrincipalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  gap: 2rem;
  padding: 1rem;
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
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const AreaOne = styled.div`
  background: var(--white-secondary);
  height: 100%;
  width: 60%;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const AreaTwo = styled.div`
  background: var(--white-secondary);
  height: 100%;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const RegisterSellerArea = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const DataArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
  gap: 2rem;
`;

export const ButtonArea = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 1rem;
  background: var(--white-secondary);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
