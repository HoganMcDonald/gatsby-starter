import React, { PureComponent } from 'react';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return <main>{children}</main>;
  }
}

export default Layout;
