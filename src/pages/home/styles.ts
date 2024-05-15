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
