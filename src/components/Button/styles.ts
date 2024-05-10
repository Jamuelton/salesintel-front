import { Button } from "antd";
import styled from "styled-components";

export const ButtonArea = styled(Button)<{
  $color?: string;
  $secondColor?: string;
}>`
  width: 100%;
  background: ${(props) => props.$secondColor};
  color: ${(props) => props.$color};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none !important;
`;
