import React, { createContext } from "react";

const Context = createContext();

const { Provider, Consumer } = Context;

const connect = mapStateToProps => WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {props => (
            <WrappedComponent {...this.props} {...mapStateToProps(props)} />
          )}
        </Consumer>
      );
    }
  };
};

export { Provider, connect };
