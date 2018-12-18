import React from 'react';
import './PriceContainer.css';
import PriceDisplay from './PriceDisplay';
global.fetch = require('node-fetch');
const cc = require('cryptocompare');
cc.setApiKey('b81b6853cc9d66cc6f37ca2071225d4af39b1959bb7da992c54bbb4aa2a5be94');

export class PriceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      volume: 0
    }
  }

  getData() {
    const name = this.props.name;
    const url = 'https://min-api.cryptocompare.com/data/price?fsym='+name+'&tsyms=EUR,USD,JPY,CNY';
    console.log(name);

    fetch(url).then(r => r.json())
      .then((cryptoprice) => {
        this.setState({
          price: cryptoprice
        })
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    this.getData();
    return (
      <div id='container'>
          {Object.keys(this.state.price).map(key => {
            return (
              <PriceDisplay
                currency={key}
                value={this.state.price[key]} />
            )
          })}
      </div>
    )
  }
}

export default PriceContainer;
