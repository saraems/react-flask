import React from 'react';
import { S } from '../components/styles';

const HomePage = () => {

  const reactLink = "https://reactjs.org/";
  const flaskLink = "https://flask.palletsprojects.com/en/1.1.x/";

  return (
    <>
      <S.Header>
        Projekt realizowany w ramach zaliczenia przedmiotu: <br/>Architektury i technologie systemów internetowych
      </S.Header>
      <br/>
      <S.Paragraph>
        Do stworzenia aplikacji zostały wykorzystane frameworki:
        <S.List>
          <li><a href={reactLink}>Flask</a> wykorzytujący python - do backendu</li>
          <li><a href={flaskLink}>React</a> wykorzystujący JavaSript oraz TypeScript - do frontendu</li>
        </S.List>
        Aplikacja zawiera kilka podstron oraz nawigację pomiędzy nimi. Niestety aplikacja nie wykorzystuje zadnej z nizej wymienionych technologi: 
        skrypty po stronie serwera i/lub klienta, ciasteczka, bazy danych, web serwisy, SSL.
      </S.Paragraph>
      <S.Paragraph>
        Niestety aplikacja moe być uzywana tylko lokalnie, w tym celu nalezy: 
        - sklonować repozytorium z github.com
        - urzywając CLI wykorzystać komend: yarn start 
        - w osobnym oknie teminala uyć komendy: flask run
      </S.Paragraph>
      <S.Paragraph>
        Projekt częściowo spełnia wymagania, wykorzytuje bowiem freamwork który serwuje sparsowany plik index.html, zamiast osobnych podstron stworzonych jako osobne pliki html. React wykorzystuje html i manipulując DOM aktualizuje plik index.html przy pomocy JavaScript ES5. 
      </S.Paragraph>
      <S.Paragraph>
        To podejście mimo iz mija się z wymaganiami jest obecnie powszechnie wykorzystywane do tworzenia stron internetowych. Dlatego mam szczerą nadzieję na wyrozumiałość oceniającego w stosunku do wykorzystania frameworku. Niestety nie udało się wykonać deploymentu aplikacj na platformie Heroku wykorzystując pliki <em>Prockfile</em> czy tez <em>Dockerfile</em>. Stan logów na dzień oddania projektu: 
      </S.Paragraph>

      <S.Image src="/Screenshot 2021-04-09 at 13.01.28.png" alt="Image with logs after failed deployment to heroku"/>
    </>
  );
};

export default HomePage;
