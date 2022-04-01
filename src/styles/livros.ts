import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  align-items: center;
  display: flex;
  max-width: 1130px;

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
    margin-top: 2.5rem;
  }

  @media screen and (min-width: 1025px) {
    justify-content: space-between;
    margin: 2.5rem auto 0;
    padding: 0 1.5rem;
  }

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

        @media (max-width: 375px) {
          display: none;
        }
      }

      button {
        background: url('/LogOut.svg') center / cover no-repeat;
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
  align-items: center;
  display: flex;
  flex-direction: column;

  background: url('/bg.png') top / cover no-repeat;
  width: 100vw;
  min-height: 100vh;

  @media (max-width: 375px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }

  @media (max-width: 1024px) {
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;

  display: flex;
  column-gap: 1rem;
  flex-direction: column;

  @media screen and (min-width: 0px) {
    margin-top: 2.5rem;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    row-gap: 1rem;
  }

  @media screen and (min-width: 1025px) {
    margin: 2.5rem auto 0 auto;
    padding: 0 1.5rem;
    row-gap: 1rem;
    overflow: hidden;
  }
`;

export const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;

export const Pagination = styled.div`
  align-items: center;
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;

  max-width: 1200px;
  width: 100%;

  padding: 1rem 1.5rem;

  @media screen and (max-width: 1180px) {
    justify-content: center;
  }

  p {
    color: var(--gray-800);
    font-size: 1rem;
    font-weight: 500;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
      order: 2;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;

    height: 32px;
    width: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      &.next {
        order: 3;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

export const ArrowRight = styled(IoIosArrowForward)``;

export const ArrowLeft = styled(IoIosArrowBack)``;
