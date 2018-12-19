import React from 'react';
import { Button, Fade } from 'reactstrap';

const buttonStyle = {
  background: '#F9AA33',
};

const fadeStyle = {
  color: 'red',
};

export default class FadeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }

    render() {
      let text;
      if (!this.state.fadeIn) {
        text = 'Psst...';
      } else {
        text = 'Ok...';
      }
        return (
            <div>
                <Button style={buttonStyle} onClick={this.toggle} >{text}</Button>
                <Fade style={fadeStyle} in={this.state.fadeIn} tag="h6" className="mt-3">
                    Don't worry about browser miners :^]
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};
