import React from "react";
import {
  initialState as paragraphInitialState,
  reducer as paragraphReducer,
} from '../../store/reducers/paragraph';
import {
  initialState as userInitialState,
  reducer as userReducer,
} from '../../store/reducers/user';
// import { Provider } from "./index";
import { Provider } from "./../../../lib";

// class StoreProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       arr: [1, 2, 3, 4, 5, 6],
//       firstName: "Didier",
//       lastName: "Franc",
//       setFirstName: this.setFirstName,
//       setLastName: this.setLastName
//     };
//   }
//   setFirstName = firstName => {
//     this.setState({ firstName });
//   };
//   setLastName = lastName => {
//     this.setState({ lastName });
//   };
//   render() {
//     return <Provider value={this.state}>{this.props.children}</Provider>;
//   }
// }

// export default StoreProvider;

const StoreProvider = (props) => {
  const initialState = {
    user: userInitialState,
    paragraph: paragraphInitialState,
  }
  const reducers = (state, action) => {
    const createReducer = {
      user: userReducer,
      paragraph: paragraphReducer,
    };
    let resauState = {};
    Object.keys(createReducer).map((key) => {
      resauState = {
        ...resauState,
        [key]: {
          ...state[key],
          ...createReducer[key](state[key], action),
        }
      };
      return key;
    });
    return {
      ...state,
      ...resauState,
    };
  }
  const [state, dispatch] = React.useReducer(reducers, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      {props.children}
    </Provider>
  );
}

export default StoreProvider;
