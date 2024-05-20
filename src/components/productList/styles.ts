import styled from "styled-components";

export const Container = styled.div`
  background: var(--white-primary);
  padding: 0.85rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    width: 20%;
  }

  svg {
    &:hover {
      color: var(--blue-primary);
      cursor: pointer;
    }
  }
`;
