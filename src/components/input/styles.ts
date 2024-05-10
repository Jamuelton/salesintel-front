import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const InputArea = styled(Input)<{
  $color?: string;
  $secondColor?: string;
}>`
  background: ${(props) => props.$secondColor};
  border: ${(props) => props.$color} 1px solid;
  color: ${(props) => props.$color};

  .ant-input {
    &::placeholder {
      color: ${(props) => props.$color} !important;
    }
  }
  &:hover {
    background: ${(props) => props.$secondColor} !important;
    border: ${(props) => props.$color} 1px solid;
  }
`;
