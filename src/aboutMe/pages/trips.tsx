import React from 'react';
import Card, { ICardProps } from '../components/information-card';
import { S } from '../components/styles';
import { Trips } from '../constants/trips';

const TripsPage = () => {
  return (
    <>
      <S.Header>Podróż</S.Header>
      <S.Paragraph>
        Podróż (z łaciny zwana peregrynacją, z francuskiego wojażem) – zmiana miejsca pobytu na odległe. Osoba
        podróżująca pieszo to wędrowiec, podróżujący środkiem komunikacji to podróżny lub wojażer. W odróżnieniu od
        nomadów – koczowników, członków grupy ludzi nieposiadającej stałego miejsca zamieszkania, przemieszczającej się
        z miejsca na miejsce, np. w związku ze zmianami pogody lub w poszukiwaniu żywności, wody, opału albo pastwisk
        dla zwierząt hodowlanych, podróżnym był od zarania dziejów przedstawiciel cywilizacji osadniczej.
      </S.Paragraph>
      <S.Paragraph></S.Paragraph>

      <S.SubHeader> Miejsca warte zobaczenia </S.SubHeader>
      <S.CardsList>
        {Trips.map((card, index) => (
          <S.CardContainer key={index}>
            <Card {...(card as ICardProps)} />
          </S.CardContainer>
        ))}
      </S.CardsList>
    </>
  );
};

export default TripsPage;
