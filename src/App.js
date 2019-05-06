import React, { Component } from 'react';
import User from './components/User';
import fetchData from './actions/fetchData';
import ErrorComponent from './components/ErrorComponent';

class App extends Component {
  state = { input: '' }

  updateState = (value) => {
    this.setState({
      ...value
    });
  }

  handleChange = (e) => {
    const { value: input } = e.target;
    this.updateState({ input });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input: user } = this.state;

    fetchData(user)
      .then(this.updateState);
  }

  render() {
    const {
      input, error, ...userProps
    } = this.state;

    return (
      <div className="body-container">
        <form id="search-form">
          <div className="form-container">
            <div className="input-container">
              <input
                value={input}
                type="text"
                placeholder="Search username..."
                name="username"
                required
                onChange={this.handleChange}
                />
            </div>
            <div className="button-container">
              <button id="search-button" type="button" onClick={this.handleSubmit}>Search</button>
            </div>
          </div>
        </form>
        {
          error ? <ErrorComponent error={error} /> : <User {...userProps} />
        }
      </div>
    );
  }
}

export default App;
