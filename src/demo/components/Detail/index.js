import React from "react";
import {
  setFirstName,
  setLastName,
  setBothName,
} from '../../store/actions/user';
import { connect } from "./../../../lib";
// import { connect } from "./../Context";
import InputText from "./../Inputs/InputText";

class DetailButtons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   if (props.firstName !== state.firstName) {
  //     return { firstName: props.firstName }
  //   }
  //   if (props.lastName !== state.lastName) {
  //     return { lastName: props.lastName }
  //   }
  //   return null;
  // }
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
  handleSubmitBoth = event => {
    event.preventDefault();
    this.props.setBothName(this.state.lastName);
  };
  render() {
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
        <div>
          <button onClick={this.handleSubmitBoth}>Change Both</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = dispatch => ({
  setFirstName: value => dispatch(setFirstName(value)),
  setLastName: value => dispatch(setLastName(value)),
  setBothName: () => dispatch(setBothName()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailButtons);
