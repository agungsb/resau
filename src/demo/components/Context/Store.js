import React from "react";
// import { Provider } from "./index";
import { Provider } from "./../../../lib";

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
