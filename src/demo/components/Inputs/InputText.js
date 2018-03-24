import React from "react";

class InputText extends React.PureComponent {
  render() {
    return <input type="text" {...this.props} />;
  }
}

export default InputText;