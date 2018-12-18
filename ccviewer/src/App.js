import React, { Component } from 'react';
import './App.css';
import PriceContainer from './PriceContainer';
import NavBar from './NavBar';
import FadeButton from './FadeButton';
import Footer from './Footer';
import Banner from './Banner';
import ChartDataFetch from './ChartDataFetch';

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
        <NavBar name={this.state.coin} onChange={this.setCrypto} />
        <Banner name={this.state.coin} />
        <PriceContainer name={this.state.coin} />
        <ChartDataFetch />
        <Footer />
      </div>
    );
  }
}

export default App;
