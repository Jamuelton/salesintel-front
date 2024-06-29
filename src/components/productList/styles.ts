import styled from "styled-components";

export const Container = styled.div`
  background: var(--white-primary);
  padding: 0.85rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  label {
    @media (min-width: 1024px) {
      width: 30%;
    }
  }

  svg {
    &:hover {
      color: var(--blue-primary);
      cursor: pointer;
    }
  }
`;

export const LabelArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 84%;
  }
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 16%;
  }
`;
