import React from 'react';

class Form extends React.Component {
  state = {
    value: ''
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  getInput = e => {
    e.preventDefault();
    this.props.getWeather(this.state.value);
    this.setState({
      value: ''
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.getInput}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
}

export default Form;
