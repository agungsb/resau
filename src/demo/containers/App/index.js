import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageTransition from "react-router-page-transition";

import { List } from "./../../components";
import Detail from "./../Detail";

class App extends React.PureComponent {
  render() {
    return (
      <PageTransition timeout={500}>
        <Switch location={this.props.location}>
          <Route exact path="/" render={props => <List {...props} />} />
          <Route path="/item" render={props => <Detail {...props} />} />
        </Switch>
      </PageTransition>
    );
  }
}

export default withRouter(App);
