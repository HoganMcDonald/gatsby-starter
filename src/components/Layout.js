import React, { PureComponent } from 'react';

import AnnouncementBar from './AnnouncementBar';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <main>
        <AnnouncementBar wait={2000} message={'This is an announcement'} />
        {children}
      </main>
    );
  }
}

export default Layout;
