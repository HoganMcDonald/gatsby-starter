import React, { PureComponent } from 'react';

import AnnouncementBar from './AnnouncementBar';
import NavBar from './NavBar';

class Layout extends PureComponent {
  render() {
    const { children, announcementBar, navBar } = this.props;
    return (
      <main>
        <AnnouncementBar wait={2000} {...announcementBar} />
        <NavBar {...navBar} />
        {children}
      </main>
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
