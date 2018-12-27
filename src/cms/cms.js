import React from 'react';
import CMS from 'netlify-cms';

import CSSInjector from './CSSInjector';
import typography from '../styles/typography';

// Previews
import HomePagePreview from './preview-templates/HomePagePreview';

CMS.registerPreviewStyle(typography.toString(), { raw: true });

CMS.registerPreviewTemplate('home', () => (
  <CSSInjector>
    <HomePagePreview />
  </CSSInjector>
));
