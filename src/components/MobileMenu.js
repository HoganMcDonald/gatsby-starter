import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { primary, white } from '../styles/theme';

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  color: ${white};
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

class MobileMenu extends PureComponent {
  render() {
    const { menuItems, onClick } = this.props;
    return (
      <Overlay>
        {menuItems.map((link, i) => (
          <LinkTag key={i} to={link.linkURL} onClick={onClick}>
            {link.label}
          </LinkTag>
        ))}
      </Overlay>
    );
  }
}

export default MobileMenu;
