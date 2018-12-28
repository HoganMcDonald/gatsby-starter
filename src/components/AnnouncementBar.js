import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import CloseIcon from '../svgs/CloseIcon';
import { light, success, dark } from '../styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Bar = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background-color: ${success};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.out ? 'hidden' : 'visible')};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 250ms ease-out;
  transition: visibility 250ms ease-out;
`;

const Message = styled.h4`
  color: ${light};
  margin: 0;
  max-width: calc(100% - 4rem);
  overflow: hidden;
  white-space: nowrap;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  cursor: button;
  color: ${light};

  &:focus {
    outline: none;
    color: ${dark};
  }
`;

class AnnouncementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    const { wait } = this.props;

    setTimeout(() => {
      this.setState({ show: true });
    }, wait);
  }

  render() {
    const { message } = this.props;

    return (
      <Bar role="alert" out={!this.state.show}>
        <Message>{message}</Message>
        <Button onClick={() => this.setState({ show: false })}>
          <CloseIcon />
        </Button>
      </Bar>
    );
  }
}

AnnouncementBar.propTypes = {
  wait: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
};

export default AnnouncementBar;
