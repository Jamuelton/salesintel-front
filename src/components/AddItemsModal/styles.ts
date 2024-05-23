import styled from "styled-components";

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 15px;
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
