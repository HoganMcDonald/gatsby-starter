import React from 'react';
import PropTypes from 'prop-types';
import { HomePageTemplate } from '../../pages/index';

import CSSInjector from '../CSSInjector';

const HomePagePreview = ({ entry }) => {
  const home = entry.getIn(['data']).toJS();
  return (
    <CSSInjector>
      <HomePageTemplate home={home} />
    </CSSInjector>
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default HomePagePreview;
