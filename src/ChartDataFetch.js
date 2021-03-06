import React from 'react';
import moment from 'moment';
import LineChart from './LineChart';
import './ChartDataFetch.css';

class ChartDataFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
    }
  }

  componentDidMount() {
    const getData = () => {
      const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR';

      fetch(url).then(r => r.json())
      .then((bitcoinData) => {
        const sortedData = [];
        let count = 0;
        for (let date in bitcoinData.bpi) {
          sortedData.push({
            d: moment(date).format('MMM DD'),
            p: bitcoinData.bpi[date].toLocaleString('us-EN', {style: 'currency', currency: 'USD'}),
            x: count, // previous days
            y: bitcoinData.bpi[date]  // numerical price
          });
          count++;
        }
        this.setState({
          data: sortedData,
          fetchingData: false
        })
      })
      .catch((e) => {
        console.log(e)
      });
    }
    getData();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h2>30 Day Bitcoin Price Chart</h2>
        </div>
        <div className='row'>
          <div className='chart'>
            { !this.state.fetchingData ?
              <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
          </div>
        </div>
        <div className='row'>
          <div id="coindesk"> Powered by <a
            href="http://www.coindesk.com/price/"
            rel="noopener noreferrer"
            target="_blank">CoinDesk</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDataFetch;
