import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from "../components/Home";
import Platform from "../components/Platform";
import Quote from "../components/Quote";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/platform/:id" component={Platform} />
              <Route path="/quote/:id" component={Quote} />
            </Switch>
          </main>
        </StyledApp>
      </Router>
    );
  }
}

export default App;