import React, { PureComponent } from 'react';

import AnnouncementBar from './AnnouncementBar';

class Layout extends PureComponent {
  render() {
    const { children, announcementBar } = this.props;
    return (
      <main>
        <AnnouncementBar wait={2000} {...announcementBar} />
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
  }
`;

export default Layout;
