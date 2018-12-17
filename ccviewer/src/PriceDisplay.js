import React from 'react';

export class PriceDisplay extends React.Component {
  render() {
    let key = this.props.currency;
    let value = this.props.value;
    console.log(this.props);
    return (
      <div>
        <h2>Currency is {key} with value {value}</h2>
      </div>
    )
  }
}

export default PriceDisplay;
