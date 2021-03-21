import React, { ReactNode } from 'react';
import styled from 'styled-components';
import TopNavigation from '../top-nav';

const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: calc(100vh - 4.5rem);
    margin: 0 auto;
    padding: 0 1rem 1rem 1rem;
    margin-top:1rem;
    background-color: white;
  `,
  Main: styled.div`
    width: 100%;
  `,
};

interface IProps {
  children?: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <TopNavigation />
      <S.Main>
        <S.PageLayout>{children}</S.PageLayout>
      </S.Main>
    </>
  );
};

export default Layout;
