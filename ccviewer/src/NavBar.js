import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
          <Navbar color='#3462ae' light expand='md'>
            <NavbarBrand href='/'>CryptoCoin Viewer</NavbarBrand>
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
                  <option value='LTC'>
                    Litecoin
                  </option>
                  <option value='BCH'>
                    Bitcoin Cash
                  </option>
                  <option value='XMR'>
                    Monero
                  </option>
                </select>
              </Nav>
          </Navbar>
        </div>
      )
    }
  }
