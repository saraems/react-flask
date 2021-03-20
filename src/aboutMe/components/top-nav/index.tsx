import React, { FC, useState } from 'react';
import styled from 'styled-components';

const S = {
  NavigationLayout: styled.div`
    width: 100%;
    color: white;
    background-color: #101d33;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  `,
  PageContainer: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  `,
  Navigation: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
  `,
  Logo: styled.h1`
    margin: 0;
    color: white;
  `,
  SubPages: styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    list-style-type: none;
  `,
  SubPage: styled.li`
    position: relative;
    padding: 0 0.5rem;
    height: 100%;
    text-transform: uppercase;
  `,
  SubPageLink: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
  SubMenu: styled.ul`
    position: absolute;
    bottom: -5rem;
    right: 0;
    width: 10rem;
    background-color: #16305b;
    border-radius: 0 0 4px 4px;
  `,
  SubMenuItem: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 2.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    align-items: flex-end;
    list-style-type: none;
  `,
  SubMenuLink: styled.a`
    height: 3rem;
    color: white;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
};

const SubPages = [
  {
    name: 'Zainteresowania',
    href: '/zainteresowania',
  },
  {
    name: 'O mnie',
    href: '/omnie',
    subMenu: [
      { name: 'Podróze', href: '/podroze' },
      { name: 'Sauna', href: '/sauna' },
    ],
  },
];

const TopNavigation: FC = () => {
  const Links = SubPages.map((subPage, index) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubMenu = !!subPage.subMenu;
    const subMenu =
      hasSubMenu &&
      subPage.subMenu.map((menuItem, index) => (
        <S.SubMenuItem key={index}>
          <S.SubMenuLink href={menuItem.href}>{menuItem.name}</S.SubMenuLink>
        </S.SubMenuItem>
      ));
    return (
      <S.SubPage key={index}>
        <S.SubPageLink  href={hasSubMenu ? null : subPage.href} onClick={() => hasSubMenu && setIsOpen(!isOpen)}>{subPage.name}</S.SubPageLink>
        {isOpen && hasSubMenu && <S.SubMenu>{subMenu}</S.SubMenu>}
      </S.SubPage>
    );
  });

  return (
    <S.NavigationLayout>
      <S.PageContainer>
        <S.Navigation>
          <S.Logo> Sara </S.Logo>
          <S.SubPages>{Links}</S.SubPages>
        </S.Navigation>
      </S.PageContainer>
    </S.NavigationLayout>
  );
};

export default TopNavigation;
