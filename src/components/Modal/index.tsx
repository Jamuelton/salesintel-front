import { XCircle } from "@phosphor-icons/react";
import * as S from "./styles";

interface ModalInterface {
  open?: boolean;
  onCancel?: () => void;
  headerText?: string;
  footer?: React.ReactNode[];
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalInterface> = ({
  open,
  onCancel,
  headerText,
  footer,
  children,
}) => {
  return (
    <S.Container
      open={open}
      onCancel={onCancel}
      closeIcon={<XCircle size={28} color="#C52D24" weight="bold" />}
      centered
      width={400}
      footer={footer}
    >
      <h2>{headerText}</h2>
      {children}
    </S.Container>
  );
};
