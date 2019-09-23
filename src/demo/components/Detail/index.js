import React from "react";
import {
  setFirstName,
  setLastName,
} from '../../store/actions/user';
import { connect } from "./../../../lib";
// import { connect } from "./../Context";
import InputText from "./../Inputs/InputText";

class DetailButtons extends React.Component {
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
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = dispatch => ({
  setFirstName: value => dispatch(setFirstName(value)),
  setLastName: value => dispatch(setLastName(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailButtons);
