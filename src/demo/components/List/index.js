import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import randomColor from "randomcolor";
import { connect } from "./../../../lib";
// import { connect } from "./../Context";

class List extends Component {
  render() {
    console.log("this.props", this.props);
    let arr = this.props.arr;
    let listItems = arr.map((item, index) => {
      return (
        <div
          key={index}
          onClick={this.goToItem.bind(this)}
          style={{ padding: 10, backgroundColor: randomColor() }}
        >
          This is a paragraph - {item}
        </div>
      );
    });
    return (
      <div className="transition-item list-page">
        <h2>{this.props.firstName}</h2>
        <div>{listItems}</div>
      </div>
    );
  }

  goToItem() {
    this.props.history.push({
      pathname: "/item",
      state: { from: this.props.location }
    });
  }
}

// const subscribedContextState = ["arr"];

const mapStateToProps = state => ({
  firstName: state.firstName,
  arr: state.arr
});

export default withRouter(connect(mapStateToProps)(List));
