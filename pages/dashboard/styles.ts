import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 8.5rem 0 10.25rem;

  background: var(--background-gray);

  height: 100vh;
`;

export const EnterpriseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-beetwen;

  background: var(--white);
  border-radius: 8px;

  margin-bottom: 2rem;
  padding: 2rem;

  section {
    width: 861px;

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

        color: var(--purple);

        margin: 0;

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
      border: 1px solid var(--purple);
      border-radius: 71px;
      padding: 8px 24px;

      font-size: 12px;
    }

    span:first-of-type{
      margin-right: 1rem;
    }
  }
`;
