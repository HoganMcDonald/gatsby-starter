import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../pages/index';

const AboutPagePreview = ({ entry, widgetFor }) => {
  const home = {
    seo: {
      title: 'asdf',
      description: 'asdf',
      browserTitle: 'asdf'
    }
  };

  return <HomePageTemplate home={home} />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
