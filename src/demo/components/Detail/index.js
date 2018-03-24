import React from "react";
import { connect } from "./../../../lib";
// import { connect } from "./../Context";
import InputText from "./../Inputs/InputText";

class DetailButtons extends React.Component {
  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("nextProps", nextProps);
  };
  shouldComponentUpdate() {
    return true;
  }
  state = {
    firstName: this.props.firstName,
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
    console.log("berubah");
    return (
      <React.Fragment>
        <div>{this.props.firstName}</div>
        <div>
          <div>
            <InputText
              onChange={this.handleChangeFirst}
              defaultValue={this.state.firstName}
            />
          </div>
          <button onClick={this.handleSubmitFirst}>Change first name</button>
        </div>
        <div>
          <div>
            <InputText
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

export default connect(mapStateToProps)(DetailButtons);
