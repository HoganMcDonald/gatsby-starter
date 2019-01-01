import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  width: ${props => (props.size ? `${props.size}rem` : '1rem')};
`;

const Line = styled.line`
  fill: none;
  stroke: currentColor;
  stroke-width: 6px;
`;

class MenuIcon extends PureComponent {
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-254.5 21.5 29 24"
        {...this.props}
      >
        <g transform="translate(-62 -697)">
          <Line x2="24" transform="translate(-192.5 740.5)" />
          <Line x2="24" transform="translate(-192.5 730.5)" />
          <Line x2="24" transform="translate(-187.5 720.5)" />
        </g>
      </Svg>
    );
  }
}

MenuIcon.propTypes = {
  size: PropTypes.number
};

export default MenuIcon;
