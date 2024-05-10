import { Input } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const InputArea = styled(Input)<{ $color?: string }>`
  background: var(--blue-primary);
  border: ${(props) => props.$color} 1px solid;

  &::placeholder {
    color: ${(props) => props.$color};
  }
`;
