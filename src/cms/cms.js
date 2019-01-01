import CMS from 'netlify-cms';

import HomePagePreview from './preview-templates/HomePagePreview';
import NavBarPreview from './preview-templates/NavBarPreview';
import typography from '../styles/typography';
CMS.registerPreviewStyle(typography.toString(), { raw: true });

// Previews
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('navbar', NavBarPreview);
