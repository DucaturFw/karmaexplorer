import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import theme from './styles/theme';
import './styles/styles.css';
import Container from './components/container/index'
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/maincontent/index';
import Distribution from './components/distribution/index';
import Exchange from './components/exchange/index';
import Choose from './components/choose/index';
import Rate  from './components/rate/index';
import Network from './components/network/index';
import Pending from './components/pending/index';
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/">
              <Container>
                <Header />
                <MainContent >
                <Route exact path="/" component ={Distribution} />
                <Route exact path="/exchange" component ={Exchange} />
                <Route exact path="/choose" component ={Choose} />
                <Route exact path="/rate" component ={Rate} />
                <Route exact path="/network" component ={Network} />
                <Route exact path="/pending" component ={Pending} />
             </MainContent >
             <Footer /> 
              </Container>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}


