import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddition = event => {
    this.setState({
      [event.target.textContent]: this.state[event.target.textContent] + 1,
    });
  }
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, element) => acc + element, 0)
  }
  countPositiveFeedbackPercentage() {
      return Math.round(this.state.good * 100 / this.countTotalFeedback());
  }
  render() {
    const namesButton = Object.keys({...this.state});
    
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {namesButton.map(nameButton => (
            <button key={nameButton} onClick={this.handleAddition}>{nameButton}</button>
          ))}
        </div>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ?
          <ul>
            {namesButton.map(nameButton => (
              <li key={nameButton}>{nameButton}: {this.state[nameButton]}</li>
            ))}
            <li>total: {this.countTotalFeedback()}</li>
            <li>positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
          </ul>
          : <p>No feedback given</p>
        }
       
      </div>
    );
  }
}

export default App;
