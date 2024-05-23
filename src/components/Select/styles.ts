import { Select } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

export const SelectArea = styled(Select)`
  border-radius: 4px !important;
  border: 1px var(--blue-primary) solid !important;
  width: 100%;

  &:focus {
    border-color: var(--red-500) !important;
    outline: none;
  }

  &:hover {
    border-color: var(--red-500) !important;
    outline: none;
  }

  .ant-select-selection-search {
    color: var(--blue-primary);
  }
`;
