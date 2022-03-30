import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  max-width: 1130px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;

    &:first-child {
      p {
        font-size: 1.75rem;
        font-weight: 300;
        padding-left: 1rem;
      }
    }

    & + div {
      p {
        font-size: 0.75rem;
        color: var(--gray-800);
        padding-right: 1rem;
      }

      button {
        background: url("/LogOut.svg") center / cover no-repeat;
        height: 32px;
        width: 32px;
        border: 0 none;

        transition: filter 0.2s;

        &:hover {
          filter: opacity(0.5);
        }
      }
    }
  }
`;

export const Container = styled.main`
  background: url("/bg.png") top / cover no-repeat;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1140px;
  height: 100%;
  max-height: 530px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;

  > div {
    background-color: var(--white);
    border-radius: 0.25rem;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

    align-items: center;
    display: flex;

    height: 160px;
    width: 272px;

    &:hover {
      cursor: pointer;
    }

    img {
      height: 122px;
      width: 81px;
      margin: 0 1rem;
    }

    div {
      h2 {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--gray-800);
      }

      h3 {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--purple-700);
      }

      p {
        color: var(--gray-900);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 20px;

        padding-top: 1.5rem;
      }
    }
  }
`;
