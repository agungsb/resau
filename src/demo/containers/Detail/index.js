import React from "react";
import randomColor from "randomcolor";
import { DetailButtons } from "./../../components";


class Detail extends React.PureComponent {
  goBack = () => {
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="transition-item detail-page">
        <DetailButtons />
        <div onClick={this.goBack}>
          <p style={{ padding: 10, backgroundColor: randomColor() }}>
            This is an Item. Click here to go back.
          </p>
        </div>
      </div>
    );
  }
}

export default Detail;
