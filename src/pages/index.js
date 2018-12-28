import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const HomePageTemplate = ({ home }) => (
  <section>
    <Hero title={home.seo.title} subTitle={home.seo.description} />
  </section>
);

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      frontmatter: announcementBar
    } = data.announcementBarData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle }
    } = home;

    return (
      <Layout announcementBar={announcementBar}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
    ...LayoutFragment
  }
`;
