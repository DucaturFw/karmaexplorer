import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
 import 'bootstrap/dist/css/bootstrap.css';
 import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import theme from './styles/theme';
import './styles/styles.css';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/maincontent/index';
import Distribution from './components/distribution/index';



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
                <Route path="/" component ={Distribution} />
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

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
