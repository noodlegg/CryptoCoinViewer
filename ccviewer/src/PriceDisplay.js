import React from 'react';
import './PriceDisplay.css';
var NumberFormat = require('react-number-format');

const numStyle = {
  float: 'right'
};

export class PriceDisplay extends React.Component {
  render() {
    let key = this.props.currency;
    let value = this.props.value;
    console.log(this.props);
    return (
      <div id='priceRow'>
        <h3>
          {key} <NumberFormat // shows the value in a formatted way
            value={value}
            displayType={'text'}
            decimalprecision={2}
            thousandSeparator={true}
            style={numStyle} />
        </h3>
      </div>
    )
  }
}

export default PriceDisplay;
