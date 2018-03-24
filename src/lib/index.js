import React, { createContext } from "react";

const Context = createContext();

const { Provider: ContextProvider, Consumer } = Context;

const connector = mapStateToProps => WrappedComponent => {
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

export const Provider = ContextProvider;
export const connect = connector;
