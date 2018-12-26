import React, { PureComponent } from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';

import typography from '../styles/typography';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
