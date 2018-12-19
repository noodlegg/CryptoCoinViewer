import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav } from 'reactstrap';

  const navBarStyle = {
    background: '#344955'
  };

  const h1Style = {
    margin: '0 0 0 10px',
    fontFamily: 'Arial Black',
    color: 'white'
  };

  export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        isOpen: false
      };
    }

    handleChange(e) {
      const name = e.target.value;
      this.props.onChange(name);
    }

    render() {
      return (
        <div>
          <Navbar light expand='md' fixedTop style={navBarStyle}>
            <NavbarBrand><h1 style={h1Style}>CryptoCoin Viewer</h1></NavbarBrand>
              <Nav className='ml-auto' navbar>
                <select id='coin' onChange={this.handleChange}>
                  <option value='BTC'>
                    Bitcoin
                  </option>
                  <option value='ETH'>
                    Ethereum
                  </option>
                  <option value='IOTA'>
                    IOTA
                  </option>
                  <option value='XRP'>
                    Ripple
                  </option>
                  <option value='XLM'>
                    Stellar
                  </option>
                </select>
              </Nav>
          </Navbar>
        </div>
      )
    }
  }
