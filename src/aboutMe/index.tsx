import React, { useState, useEffect } from 'react';
import TopNavigation from './components/top-nav';
import styled from 'styled-components';
import formatDate from 'date-fns/format';


const dateFormat = 'MMMM dd, yyyy';


const S = {
  PageLayout: styled.div`
    max-width: 1200px;
    min-height: calc(100vh - 3.5rem);
    margin: 0 auto;
    /* color: white; */
    background-color: white;
  `,
  Main: styled.div`
    width: 100%;
  `,
};

function AboutMePage() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetch('/time')
      .then((res) => res.json())
        .then((data) => {

        setCurrentTime(data.time);
      });
  }, []);
    
    

  return (
    <>
      <TopNavigation />
      <S.Main>
        <S.PageLayout>
          <p>The current time is {currentTime}.</p>
        </S.PageLayout>
      </S.Main>
    </>
  );
}

export default AboutMePage;
