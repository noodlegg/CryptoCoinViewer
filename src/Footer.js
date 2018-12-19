import React from 'react';
import Collapse from './Collapse';

const divStyle = {
  background: '#4A6572',
  borderTop: '1px solid black',
  textAlign: 'right',
  position: 'relative',
  height: '40px',
  marginTop: ' 28px',
  right: ' 0',
  left: ' 0',
  bottom: '0',
  color: 'white'
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Collapse />
      </div>
    )
  }
}
