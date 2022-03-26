import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetwen;

  background: var(--white);
  border-radius: 0.5rem;

  margin-bottom: 2rem;
  padding: 2rem;

  section {
    width: 100%;

    div {
      display: flex;
      flex-direction: row;

      margin-bottom: 1rem;

      h1 {
        font-size: 1.25rem;
        font-weight: bold;
      }

      button {
        border: none;
        background: none;
        margin: 0;

        color: var(--purple);

        transition: transform 0.2s;
        &:hover {
          transform: scale(1.3);
        }
      }

      button:first-of-type {
        margin: 0 0.67rem 0 1.125rem;
      }
    }

    p {
      color: var(--text-gray);
      font-size: 0.875rem;
    }
  }

  aside {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    span {
      border: 0.0625rem solid var(--purple);
      border-radius: 4.4375rem;
      padding: 0.5rem 1.5rem;

      font-size: 0.75rem;
    }

    span:first-of-type {
      margin-right: 1rem;
    }
  }
`
