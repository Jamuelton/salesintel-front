import styled from "styled-components";
import { Divider } from "antd";
import { Table } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
  width: 100dvw;
  height: 100dvh;
  padding: 1rem;

  h2 {
    color: var(--blue-primary);

    span {
      font-size: 20px;
      font-weight: bold;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

export const Content = styled.section`
  width: 80%;
  height: 100%;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Line = styled(Divider)`
  .ant-divider {
    color: var(--blue-primary) !important;
  }
`;

export const InputContainer = styled.div`
  span {
    color: var(--blue-primary);
    font-size: 13px;
    padding-left: 2px;
  }

  display: flex;
  flex-direction: column;
`;

export const SearchButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
  }
`;

export const AddButton = styled.div`
  width: 30rem;
  display: flex;
  gap: 1rem;
`;
export const SearchInput = styled.div`
  width: 15rem;
`;

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    border-bottom: 3px solid #244bc5;
    background: #dcdde1;
    color: #244bc5;
    border-right: none !important;
    height: 18px;
    line-height: 18px;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    border-right: none !important;
    background: #dcdde1;
    border-bottom: 1px solid #b6b6b6;
    height: 17px;
    padding: 8px 10px 8px 17px;
    line-height: 17px;
    font-size: 16px;
  }
  .ant-table-container {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #d9d9d9 !important;
  }

  .ant-pagination-item-active {
    background-color: #244bc5;
    border: none;
  }

  .ant-pagination-item-active a {
    color: white;
  }

  .ant-pagination-item-active a:hover {
    color: white;
  }
`;
