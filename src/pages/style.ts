import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background: url("/background-image.png") center / cover no-repeat;

  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  max-width: 1200px;
  padding-left: 7.25rem;

  > div {
    display: flex;
    column-gap: 1rem;
    padding-bottom: 3rem;

    p {
      color: var(--white);
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
  form {
    button {
      background-color: var(--white);
      border: 0 none;
      border-radius: 44px;
      color: var(--purple-700);

      font-size: 1rem;
      font-weight: 600;

      letter-spacing: 0.95px;
      padding: 0.01rem 1.25rem;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.9);
      }
    }
  }
`;
