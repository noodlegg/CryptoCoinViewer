import React from 'react';
import btcBanner from './images/btc_banner.png';
import ethBanner from './images/eth_banner.png';
import iotaBanner from './images/iota_banner.png';
import xrpBanner from './images/xrp_banner.png';
import xlmBanner from './images/xlm_banner.png';

const imgStyle = {
  maxWidth: '100%',
  height: 'auto'
};

export default class Banner extends React.Component {
  render() {
    let imgSrc;
    const name = this.props.name;
    if (name === 'BTC') {
      imgSrc = btcBanner
    } else if (name === 'ETH') {
      imgSrc = ethBanner
    } else if (name === 'IOTA') {
      imgSrc = iotaBanner
    } else if (name === 'XRP') {
      imgSrc = xrpBanner
    } else if (name === 'XLM') {
      imgSrc = xlmBanner
    }
    return (
      <div>
        <img
          src={imgSrc}
          style={imgStyle} />
      </div>
    )
  }
}
