import Dropdown from "react-dropdown";
import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import "./index.css";
import { Month, Day, Year } from "../../constants/archive";

const ArchiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "",
      day: "",
      year: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(property, e) {
    this.setState({ ...this.state, [property]: e.value });
  }

  select(e) {
    alert(e.target.value);
  }

  render() {
    return (
      <ArchiveContainer>
        <Dropdown
          options={Month}
          onChange={e => this.handleChange("month", e)}
          value={this.state.month}
          placeholder="Month"
        />
        <Dropdown
          options={Day}
          onChange={e => this.handleChange("day", e)}
          value={this.state.day}
          placeholder="Day"
        />
        <Dropdown
          options={Year}
          onChange={e => this.handleChange("year", e)}
          value={this.state.year}
          placeholder="Year"
        />
      </ArchiveContainer>
    );
  }
}

export default Archive;
