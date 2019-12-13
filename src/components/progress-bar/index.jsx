import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./index.css";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.itemsLen !== this.props.itemsLen ||
      prevProps.completedItemsLen !== this.props.completedItemsLen
    ) {
      this.updatePercentage();
    }
  }

  componentDidMount() {
    this.updatePercentage();
  }

  //passing through length of completed items and items
  updatePercentage = () => {
    const { completedItemsLen, itemsLen } = this.props;
    if (!itemsLen && !completedItemsLen) {
      return this.setState({ percentage: 0 });
    }
    // Completed items divided by the total number of items (items + completed items)
    // and Multipled by 100 to make decimal into an integer
    const newPercentage =
      (completedItemsLen / (itemsLen + completedItemsLen)) * 100;

    // Floored so you don't get numbers like 33.333, just 33
    const roundedNewPercentage = Math.floor(newPercentage);

    this.setState({
      percentage: roundedNewPercentage
    });
  };

  render() {
    return (
      <CircularProgressbar
        value={this.state.percentage}
        text={`${this.state.percentage}%`}
      />
    );
  }
}
export default ProgressBar;
