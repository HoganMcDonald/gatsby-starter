import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import { light, primary, dark } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Copyright = styled.p`
  margin: 0;
  color: ${light};
`;

const SocialLinks = styled.div``;

class Footer extends PureComponent {
  render() {
    const { socialUrls = [], copyrightHolder } = this.props;

    return (
      <FooterContainer>
        {!!socialUrls.length && (
          <SocialLinks>
            {socialUrls.map((social, i) => (
              <SocialIcon
                key={i}
                url={social.linkURL}
                fgColor={light}
                bgColor={primary}
                style={{ height: '2.5rem', width: '2.5rem', margin: '0.5rem' }}
                target="_blank"
              />
            ))}
          </SocialLinks>
        )}
        <Copyright>
          Copyright &copy; {new Date().getFullYear()} {copyrightHolder}
        </Copyright>
      </FooterContainer>
    );
  }
}

export default Footer;
