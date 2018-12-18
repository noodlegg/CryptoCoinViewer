import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const buttonStyle = {
  background: '#F9AA33',
};

const cardStyle = {
  color: 'white',
  background: '#4A6572',
};

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    let buttonText;
    if (!this.state.collapse) {
      buttonText = 'Psst...';
    } else {
      buttonText = 'OK!';
    }
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={buttonStyle}>
          {buttonText}
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={cardStyle}>
            Don't worry about browser miners  :^]
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
