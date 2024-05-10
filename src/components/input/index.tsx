import React, { ReactNode } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string;
  color?: string;
  secondColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: string;
  value?: string;
  disabled?: boolean;
  inputFunction?: React.ChangeEventHandler<HTMLInputElement>;
  status?: "" | "warning" | "error" | undefined;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  color,
  leftIcon,
  rightIcon,
  secondColor,
  type,
  disabled,
  inputFunction,
  status,
}) => {
  return (
    <S.Container>
      <S.InputArea
        $secondColor={secondColor}
        $color={color}
        placeholder={placeholder}
        prefix={leftIcon}
        suffix={rightIcon}
        type={type}
        disabled={disabled}
        onChange={inputFunction}
        status={status}
      />
    </S.Container>
  );
};
