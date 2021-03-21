import React from 'react';
import Card, { ICardProps } from '../components/information-card';
import { S } from '../components/styles';
import { Saunas } from '../constants/saunas';

const SaunasPage = () => {
  return (
    <>
      <S.Header>Sauna</S.Header>
      <S.Paragraph>
        Sauna to małe pomieszczenie lub budynek zaprojektowany jako miejsce do przeprowadzania suchych lub mokrych sesji
        gorących. Para i wysoka temperatura powodują pocenie się kąpiących się.
      </S.Paragraph>
      <S.Paragraph>
        Najstarsze znane sauny w Finlandii zostały wykonane z dołów wykopanych w zboczu w ziemi i używane głównie jako
        mieszkania zimą. W saunie znajdował się kominek, w którym kamienie były podgrzewane do wysokiej temperatury. Na
        gorące kamienie polewano wodą, aby wytworzyć parę i wywołać wrażenie zwiększonego ciepła.
      </S.Paragraph>

      <S.SubHeader>Nejpiękniejsze sauny w Norwegii</S.SubHeader>
      <S.CardsList>
        {Saunas.map((card, index) => (
          <S.CardContainer key={index}>
            <Card {...(card as ICardProps)} />
          </S.CardContainer>
        ))}
      </S.CardsList>
    </>
  );
};

export default SaunasPage;
