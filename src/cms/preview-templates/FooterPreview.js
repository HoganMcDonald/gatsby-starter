import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../../components/Footer';
import CSSInjector from '../CSSInjector';

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <CSSInjector>
      <Footer {...data} />
    </CSSInjector>
  );
};

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default FooterPreview;
