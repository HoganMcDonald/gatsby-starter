import React, { PureComponent } from 'react';
import styled from 'styled-components';

import AnnouncementBar from './AnnouncementBar';
import NavBar from './NavBar';
import Footer from './Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1 0 auto;
`;

class Layout extends PureComponent {
  render() {
    const { children, announcementBar, navBar } = this.props;
    return (
      <Container>
        <AnnouncementBar wait={2000} {...announcementBar} />
        <NavBar {...navBar} />
        <Main>{children}</Main>
        <Footer />
      </Container>
    );
  }
}

export const query = graphql`
  fragment LayoutFragment on Query {
    announcementBarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "announcement-bar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            message
            linkURL
          }
        }
      }
    }
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default Layout;
