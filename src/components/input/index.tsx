import React from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string;
  color?: string;
}
export const Input: React.FC<InputProps> = ({ placeholder, color }) => {
  return (
    <S.Container>
      <S.InputArea $color={color} placeholder={placeholder} />
    </S.Container>
  );
};
