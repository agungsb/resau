# Introduction

React 16.3's new [Context API](https://reactjs.org/docs/context.html) is very promising. Who knows that in the future we're no longer need the likes of Redux for our app's state management? For more information, [this article](https://medium.freecodecamp.org/replacing-redux-with-the-new-react-context-api-8f5d01a00e8c) is worth to read.

# Getting Started

## Prerequisites

This plugin uses React 16.3's new Context API. So this plugin won't be working with version below React 16.3. Make sure to use the latest version of React by running the following command:

`npm install react@next react-dom@next` or `yarn add react@next react-dom@next`

Install package

`npm install resau` or `yarn add resau`

# Usage

## Create Store

Instead of `actions` and `reducers` like Redux, the store is just the state of a React component.

e.g. `/src/components/Store.js`

```
import React from "react";
import { Provider } from "resau";

class StoreProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3, 4, 5, 6],
      firstName: "Didier",
      lastName: "Franc",
      setFirstName: this.setFirstName,
      setLastName: this.setLastName
    };
  }
  setFirstName = firstName => {
    this.setState({ firstName });
  };
  setLastName = lastName => {
    this.setState({ lastName });
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default StoreProvider;

```

## Attach Store to App

Now that you have created the app's store, it's time to put the store to app's root component.

e.g. `/src/index.js`

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Router } from "react-router-dom";

import createHistory from "history/createBrowserHistory";
import StoreProvider from "./components/Context/Store";

const history = createHistory();
ReactDOM.render(
  <StoreProvider>
    <Router history={history}>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

```

## Connect To Component

You're good to go. All you have to do is connecting your component to the store you've created earlier using `connect`.

e.g. `/src/containers/Home/index.js`

```
import React from "react";
import { connect } from "resau";

class Home extends React.Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("nextProps", nextProps);
  };
  state = {
    firstName: this.props.firstName || "",
    lastName: this.props.lastName || ""
  };
  handleChangeFirst = event => {
    this.setState({ firstName: event.target.value });
  };
  handleSubmitFirst = event => {
    event.preventDefault();
    this.props.setFirstName(this.state.firstName);
  };
  handleChangeLast = event => {
    this.setState({ lastName: event.target.value });
  };
  handleSubmitLast = event => {
    event.preventDefault();
    this.props.setLastName(this.state.lastName);
  };
  render() {
    return (
      <React.Fragment>
        <div>{this.props.firstName}</div>
        <div>
          <div>
            <input
              type="text"
              onChange={this.handleChangeFirst}
              defaultValue={this.state.firstName}
            />
          </div>
          <button onClick={this.handleSubmitFirst}>Change first name</button>
        </div>
        <div>
          <div>
            <input
              type="text"
              onChange={this.handleChangeLast}
              value={this.state.lastName}
            />
          </div>
          <button onClick={this.handleSubmitLast}>Change last name</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.firstName,
  lastName: state.lastName,
  setFirstName: state.setFirstName,
  setLastName: state.setLastName
});

export default connect(mapStateToProps)(Home);
```

# Notes

The `mapStateToProps` variable is a function that return the context's state you want to map as the component's props. The states can be any type, it depends on what you define on your app's store. In the above example, there's one state that we don't subscribe to, which is `arr`.

In general, if you are familiar with Redux, it's going to be easy to understand.. (plus, there is no `mapDispatchToProps`!)

If you are using `react-router-dom` and you find yourself can't navigate between routes, you might need to wrap your component with `react-router-dom`'s `withRouter` higher order component.

# Powered by

https://github.com/DimitriMikadze/create-react-library

# Example

Just clone this repo and run `yarn start`. The example is in `/src/demo/`.

# License

MIT
