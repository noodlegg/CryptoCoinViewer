import React, { Component } from 'react';
import './App.css';
import PriceContainer from './PriceContainer';
import Selector from './Selector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'BTC'
    };
    this.setCrypto = this.setCrypto.bind(this);
  }

  setCrypto(string) {
    this.setState({
      coin: string
    });
  }

  render() {
    return (
      <div className="App">
        <header>CryptoCoin Viewer</header>
        <Selector name={this.state.coin} onChange={this.setCrypto} />
        <PriceContainer name={this.state.coin} />
      </div>
    );
  }
}

export default App;
