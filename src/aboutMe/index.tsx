import React from 'react';
import Layout from './components/page-layout';
import { routes } from './constants/routes';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SaunasPage from './pages/sauna';
import TripsPage from './pages/trips';
import AboutPage from './pages/about';
import HomePage from './pages/home';

function AboutMePage() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.sauna} exact component={SaunasPage} />
          <Route path={routes.trips} exact component={TripsPage} />
          <Route path={routes.about} exact component={AboutPage} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default AboutMePage;
