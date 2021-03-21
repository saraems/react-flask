import React from 'react';
import styled from 'styled-components';
import { S } from '../components/styles';

const Z = {
  Img: styled.img`
    height: 300px;
    width: 450px;
    border-radius: 8px;
    background: #e1e1e1;
    margin-right: 1rem;
  `,
  AboutMeSection: styled.div`
    display: flex;
    width: 100%;
  `,
};

const me =
  'https://www.thebalancecareers.com/thmb/rScoe4TMRNcHB4PYk_FVPIKPpMA=/3864x2576/filters:no_upscale():max_bytes(150000):strip_icc()/young-computer-programmer-taking-a-coffee-break-in-the-office--995603558-5c06c51e46e0fb00019c76cd.jpg';

const AboutPage = () => {
  return (
    <>
      <S.Header>O mnie</S.Header>
      <Z.AboutMeSection>
        <Z.Img src={me} />
        <S.Paragraph>Coś tam o mnie</S.Paragraph>
      </Z.AboutMeSection>
    </>
  );
};

export default AboutPage;
