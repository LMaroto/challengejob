import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 5rem;
  padding: 0 9.375rem;

  background: var(--white);

  h1 {
    font: 1.5rem "Montserrat", sans-serif;
    font-weight: bold;
    color: var(--purple);
  }
`;

export const AddButton = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: space-beetwen;
    align-items: center;

    height: 2.25rem;
    padding: 0.625rem 2.5rem;

    background: var(--purple);

    border: 0.0625rem solid var(--purple);
    border-radius: 1.0625rem;

    font-size: 1rem;
    font-weight: bold;
    color: var(--white);

    transition: transform 0.2s;

    svg {
      margin-left: 0.5rem;
    }

    &:hover {
      background: ${darken(0.05, "#4F46BB")};
      transform: scale(1.03);
    }
`;