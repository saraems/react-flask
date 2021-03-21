import styled from 'styled-components';

export const S = {
  Paragraph: styled.p`
    letter-spacing: 0.25px;
    margin: 1rem 0;
  `,
  Header: styled.h2`
    font-size: 2rem;
    margin: 0.5rem 0;
  `,
  SubHeader: styled.h2`
    margin: 2.5rem 0 1rem 0;
  `,

  CardsList: styled.ul`
    width: 100%;

    list-style: none;
  `,
  CardContainer: styled.li`
    width: 100%;
    text-decoration: none;
    list-style: none;
    margin-bottom: 1rem;
  `,
};