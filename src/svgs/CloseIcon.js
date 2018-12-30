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

class CloseIcon extends PureComponent {
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-255.914 672.086 26.828 26.828"
        {...this.props}
      >
        <g transform="translate(-582 650)">
          <Line
            size={this.props.size}
            x1="24"
            y2="24"
            transform="translate(327.5 23.5)"
          />
          <Line
            size={this.props.size}
            x1="24"
            y2="24"
            transform="translate(351.5 23.5) rotate(90)"
          />
        </g>
      </Svg>
    );
  }
}

CloseIcon.propTypes = {
  size: PropTypes.number
};

export default CloseIcon;
