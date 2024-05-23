import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import * as S from "./styles";

interface SelectProps {
  label?: string;
  defaut?: string;
  selectFunc?: (
    value: unknown,
    option:
      | DefaultOptionType
      | BaseOptionType
      | (DefaultOptionType | BaseOptionType)[]
  ) => void;
  list?: Array<ListProps>;
  infoText?: string;
  status?: "" | "warning" | "error" | undefined;
  errorShow?: boolean;
  optional?: boolean;
  color?: string;
  value?: string;
  disable?: boolean;
}

interface ListProps {
  value?: string;
  label: string;
}

export const Select: React.FC<SelectProps> = ({
  defaut,
  selectFunc,
  list,
  status,
  value,
  disable,
}) => {
  return (
    <S.Container>
      <S.SelectArea
        variant="borderless"
        defaultValue={defaut}
        options={list}
        onChange={selectFunc}
        status={status}
        value={value}
        disabled={disable}
      >
        {list &&
          list.map((item) => (
            <option key={item.label} value={item.label}>
              {item.label}
            </option>
          ))}
      </S.SelectArea>
    </S.Container>
  );
};
