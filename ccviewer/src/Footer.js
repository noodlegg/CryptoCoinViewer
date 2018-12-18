import React from 'react';
import Collapse from './Collapse';

const divStyle = {
  background: '#4A6572',
  borderTop: '1px solid black',
  textAlign: 'right',
  position: 'static',
  height: '40px',
  width: '100%',
  bottom: '0',
  color: 'white',
  marginTop: '28px'
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
