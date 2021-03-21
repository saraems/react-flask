import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    z-index: 1;
    transform: scale(1);
  }
  50% {
    z-index: 1;
    transform: scale(0.99);
  }
  100% {
    z-index: 1;
    transform: scale(1);
  }
`;

const S = {
  Card: styled.div`
    display: flex;
    width: 100%;
    height: 125px;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    box-shadow: rgb(0 0 0 / 15%) 0px 0.125rem 0.25rem 0px;

    &:hover {
      animation: ${pulse} 0.5s ease forwards;
    }
  `,
  Img: styled.img`
    height: 100%;
    width: 200px;
    border-radius: 4px 0 0 4px;
    background: #e1e1e1;
  `,
  Information: styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 100%;
    width: calc(100% - 200px);
    padding: 0.5rem 1rem;
  `,
  CardHeader: styled.a`
    margin-bottom: 0.25rem;
  `,
  AdditionalInfo: styled.span`
    font-size: 10px;
    margin-bottom: 0.5rem;
  `,
  CardDescription: styled.p`
    height: 50px;
    font-size: 0.875rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

export interface ICardProps {
  title: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  subTitle?: string;
  description?: string;
}

const Card = ({ title, href, imageSrc, imageAlt, subTitle, description }: ICardProps) => {
  return (
    <S.Card>
      <S.Img src={imageSrc} alt={imageAlt} />
      <S.Information>
        <S.CardHeader href={href || ''}> {title} </S.CardHeader>
        <S.AdditionalInfo>{subTitle}</S.AdditionalInfo>
        <S.CardDescription>{description}</S.CardDescription>
      </S.Information>
    </S.Card>
  );
};

export default Card;
