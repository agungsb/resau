import React from "react";
import randomColor from "randomcolor";
import { DetailButtons } from "./../../components";

class Detail extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  goBack() {
    this.props.history.push("/");
  }
  render() {
    console.log('not');
    return (
      <div className="transition-item detail-page">
        <DetailButtons />
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, backgroundColor: randomColor() }}>
            This is an Item. Click here to go back.
          </p>
        </div>
      </div>
    );
  }
}

export default Detail;
