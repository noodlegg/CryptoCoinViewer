import React from 'react';
import FadeButton from './FadeButton';

const divStyle = {
  background: '#4A6572',
  borderTop: '1px solid black',
  textAlign: 'center',
  padding: '15px',
  position: 'static',
  height: '50px',
  width: '100%',
  bottom: '0',
  color: 'white',
  marginTop: '20px'
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <FadeButton />
      </div>
    )
  }
}
