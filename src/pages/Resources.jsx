import React from "react";
import styled from "styled-components";
import GoogleRemindersImg from "../assets/470x248.svg";
import JiraRemindersImg from "../assets/448x305.svg";
import MavenLinkHoursImg from "../assets/363x447.png";

const WidgetContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Col1Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 60%;
  margin-right: 1.5em;
`;

const Col2Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 40%;
`;

const GoogleRemindersImage = styled.img`
  display: flex;
`;

const JiraRemindersImage = styled.img`
  display: flex;
  height: 90%;
`;

const MavenLinkHoursImage = styled.img`
  display: flex;
  height: 50vh;
`;

const GoogleReminders = styled.div`
  color: #313660;
  font-size: 1em;
  padding-top: 5px;
  width: 85%;
  height: 20vh;
  margin-bottom: 2.5em;
  max-height: 100%;
  background-color: #fafafe;
  border-radius: 10px;
  overflow: auto;
`;
const JiraReminders = styled.div`
  color: #313660;
  font-size: 1em;
  padding: 10px;
  width: 85%;
  height: 40vh;
  max-height: 100%;
  background-color: #fafafe;
  border-radius: 10px;
  overflow: auto;
`;

const MavenLinkHours = styled.div`
  color: #313660;
  font-size: 1em;
  margin-bottom: 1em;
  width: 85%;
  height: 50vh;
  max-height: 100%;
  background-color: #fafafe;
  overflow: auto;
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  color: #313660;
  font-size: 1em;
  padding-bottom: 20px;
  width: 90%;
  height: 10vh;
  overflow: auto;
`;

const Links = styled.div`
  display: flex;
  padding: 0px !important;
  background-color: #e3e7ea;
  width: 90px;
  height: 90px;
`;

class Resources extends React.Component {
  render() {
    return (
      <div>
        <WidgetContainer>
          <Col1Container>
            <div>
              <h2>Google Reminders</h2>
              <GoogleReminders>
                <GoogleRemindersImage src={GoogleRemindersImg} />
              </GoogleReminders>
            </div>
            <div>
              <h2>Jira Ticket Board</h2>
              <JiraReminders>
                <JiraRemindersImage src={JiraRemindersImg} />
              </JiraReminders>
            </div>
          </Col1Container>
          <Col2Container>
            <div>
              <h2>Mavenlink Hours</h2>
              <MavenLinkHours>
                <MavenLinkHoursImage src={MavenLinkHoursImg} />
              </MavenLinkHours>
            </div>
            <div>
              <h2>Quick Links</h2>
              <QuickLinks>
                <a href="https://google.com">
                  <Links />
                </a>
                <a href="https://google.com">
                  <Links />
                </a>
                <a href="https://google.com">
                  <Links />
                </a>
              </QuickLinks>
            </div>
          </Col2Container>
        </WidgetContainer>
      </div>
    );
  }
}

export default Resources;
