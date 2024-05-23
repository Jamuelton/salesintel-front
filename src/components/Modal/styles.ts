import { Modal } from "antd";
import styled from "styled-components";

export const Container = styled(Modal)`
  .ant-modal-content {
    padding: 42px 40px 42px 40px;
  }

  h2 {
    color: var(--blue-primary);
    text-align: center;
    padding-bottom: 15px;
  }
`;
