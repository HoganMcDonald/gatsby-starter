import React from 'react';
import PropTypes from 'prop-types';

import AnnouncementBar from '../../components/AnnouncementBar';
import CSSInjector from '../CSSInjector';

const AnnouncementBarPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  return (
    <CSSInjector>
      <AnnouncementBar {...data} />
    </CSSInjector>
  );
};

AnnouncementBarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default AnnouncementBarPreview;
