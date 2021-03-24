import { Component } from 'react';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';
import FeedbackOptions from '../FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddition = ({ target: { textContent } }) => {
    this.setState({
      [textContent]: this.state[textContent] + 1,
    });
  };
  countTotalFeedback() {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, element) => acc + element,
      0,
    );
    return totalFeedback;
  }
  countPositiveFeedbackPercentage() {
    const positiveFeedback = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return positiveFeedback;
  }
  render() {
    const namesButton = Object.keys({ ...this.state });

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={namesButton}
            onLeaveFeedback={this.handleAddition}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
              <Notification
                message="No feedback given"
              />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
