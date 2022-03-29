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
`;
