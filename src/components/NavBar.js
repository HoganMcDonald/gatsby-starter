import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { white, link } from '../styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
`;

const LogoLink = styled(Link)`
  height: 100%;
`;

const Logo = styled.img`
  height: 100%;
  margin: 0;
`;

const LinkList = styled.ul`
  margin: 0;
  list-style: none;
  float: right;
  display: flex;
`;

const LinkItem = styled.li`
  margin: 0;
  margin-left: 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const linkStyles = `
  text-decoration: none;
  color: ${white};
  transition: color 150ms ease-out;

  &:hover {
    color: ${link};
  }
`;

const LinkTag = styled(Link)`
  ${linkStyles}
`;

const A = styled.a`
  ${linkStyles}
`;

class NavBar extends PureComponent {
  render() {
    const { menuItems = [], logoImage } = this.props;
    return (
      <Nav>
        <LogoLink to={'/'}>
          <Logo src={logoImage.image} alt={logoImage.imageAlt} />
        </LogoLink>
        <LinkList>
          {menuItems.map((link, i) => (
            <LinkItem key={i}>
              {link.linkType === 'internal' ? (
                <LinkTag to={link.linkURL}>{link.label}</LinkTag>
              ) : (
                <A href={link.linkURL}>{link.label}</A>
              )}
            </LinkItem>
          ))}
        </LinkList>
      </Nav>
    );
  }
}

NavBar.propTypes = {
  links: PropTypes.array,
  logoImage: PropTypes.object.isRequired
};

export default NavBar;
