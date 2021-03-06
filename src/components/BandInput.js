import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>
          <label>Band Name: </label>
          <input type="text" onChange={this.handleChange} />
        </p>
        <input type="submit" />
      </form>
      </div>
    );
  }
};

export default BandInput;
