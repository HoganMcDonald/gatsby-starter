import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../../components/NavBar';
import CSSInjector from '../CSSInjector';

const NavBarPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <CSSInjector>
      <NavBar {...data} />
    </CSSInjector>
  );
};

NavBarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default NavBarPreview;
