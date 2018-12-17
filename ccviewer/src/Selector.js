import React from 'react';

export class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>Selected coin is {this.props.name}!</h1>
        <select id='coin' onChange={this.handleChange}>
          <option value='BTC'>
            Bitcoin
          </option>
          <option value='ETH'>
            Ethereum
          </option>
          <option value='IOT'>
            IOTA
          </option>
          <option value='XRP'>
            Ripple
          </option>
          <option value='XLM'>
            Stellar
          </option>
          <option value='LTC'>
            Litecoin
          </option>
          <option value='BCH'>
            Bitcoin Cash
          </option>
          <option value='XMR'>
            Monero
          </option>
        </select>
      </div>
    );
  }
}

export default Selector;
