import CMS from 'netlify-cms';

import HomePagePreview from './preview-templates/HomePagePreview';
import NavBarPreview from './preview-templates/NavBarPreview';
import FooterPreview from './preview-templates/FooterPreview';
import AnnouncementBar from './preview-templates/AnnouncementBarPreview';
import typography from '../styles/typography';
CMS.registerPreviewStyle(typography.toString(), { raw: true });

// Previews
CMS.registerPreviewTemplate('home', HomePagePreview);
CMS.registerPreviewTemplate('navbar', NavBarPreview);
CMS.registerPreviewTemplate('footer', FooterPreview);
CMS.registerPreviewTemplate('announcementBar', AnnouncementBar);
