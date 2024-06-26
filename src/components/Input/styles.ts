import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;

  p {
    color: red;
    font-size: 0.75rem;
  }
`;

export const InputArea = styled(Input)<{
  $color?: string;
  $secondColor?: string;
}>`
  background: ${(props) => props.$secondColor};
  border: ${(props) => props.$color} 1px solid;
  color: ${(props) => props.$color};

  &:hover {
    background: ${(props) => props.$secondColor} !important;
    border: ${(props) => props.$color} 1px solid;
  }

  .ant-input {
    &::placeholder {
      color: ${(props) => props.$color} !important;
    }
  }
`;
