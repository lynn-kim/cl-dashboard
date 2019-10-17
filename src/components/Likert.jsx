import React from "react";
import "./Likert.css";
import styled from "styled-components";
// likert scale for self evaluation with for options

const ButtonContainer = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 10px;
`;

let submitted = false; // add a condition for when the week resets

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: false,
      active: "",
      options: ["strongly disagree", "disagree", "agree", "strongly agree"],
      value: 0
      // map week number and submitted (t/f) to ensure one submit / week
    };
  }

  // set value with button
  handleClick = (e, key) => {
    this.setState({
      value: key,
      active: key
    });
  };

  render() {
    return (
      <div className="item">
        <p>{this.props.prompt}</p>
        <section>
          {this.state.options.map((option, index) => (
            <button
              className={
                this.state.active === index ? "selected" : "likert-option"
              }
              key={index}
              disabled={submitted}
              onClick={e => this.handleClick(e, index)}
            >
              {option}
            </button>
          ))}
        </section>
        {/* <p> score: {this.state.value}</p> */}
      </div>
    );
  }
}

class Reflection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  submit = () => {
    var confirm = window.confirm("Submit?");
    if (confirm) {
      this.setState({
        submitted: true
      });
      submitted = true;
      return true;
      // submit values to some database
    }
  };

  disabled() {
    // if not submitted then disabled == false
    // if submitted and weekday
  }
  render() {
    return (
      <>
        <Option prompt={"I managed my time well."} />
        <Option prompt={"I completed all of my assigned tasks."} />
        <Option prompt={"I collaborated with my coworkers."} />
        <Option prompt={"I improved on x skill."} />
        <ButtonContainer>
          <button
            type={"submit"}
            onClick={this.submit}
            className="submit-button"
            disabled={submitted}
          >
            Submit
          </button>
        </ButtonContainer>
      </>
    );
  }
}

export default Reflection;
