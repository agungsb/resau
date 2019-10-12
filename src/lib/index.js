import React, { createContext } from "react";

const Context = createContext({});

const { Provider: ContextProvider, Consumer } = Context;

const connector = (mapStateToProps = () => { }, mapDispatchToProps = () => { }) => WrappedComponent => {
  return (hocProps) => {
    const additionalProps = (props) => ({
      ...mapStateToProps(props.state),
      ...mapDispatchToProps(props.dispatch),
    });
    return (
      <Consumer>
        {props => (
          <WrappedComponent
            {...hocProps}
            {...additionalProps(props)}
          />
        )}
      </Consumer>
    );
  }
};

export const StoreProvider = (props) => {
  const { store } = props;
  const {
    initialState,
    reducers,
  } = store;
  const combinedReducers = (state, action) => {
    let globalAppState = {};
    Object.keys(reducers).map((key) => {
      globalAppState = {
        ...globalAppState,
        [key]: {
          ...state[key],
          ...reducers[key](state[key], action),
        }
      };
      return key;
    });
    return {
      ...state,
      ...globalAppState,
    };
  }
  const enhancedDispatch = (fun) => {
    console.log('fun', typeof fun);
    if (typeof fun === 'function') {
      fun(dispatch);
    } else {
      console.log('fun', fun);
      dispatch(fun);
    } 
  }
  const [state, dispatch] = React.useReducer(combinedReducers, initialState);
  return (
    <Provider value={{ state, dispatch: enhancedDispatch }}>
      {props.children}
    </Provider>
  );
}

export const Provider = ContextProvider;
export const connect = connector;
