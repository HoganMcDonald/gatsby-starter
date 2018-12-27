import React from 'react';
import { StyleSheetManager } from 'styled-components';

class CSSInjector extends React.Component {
  state = {
    iframe: false
  };

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0];
    iframe.contentWindow.document.body.style.margin = 0;
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframe: iframeHeadElem });
  }

  render() {
    return (
      <>
        {this.state.iframe && (
          <StyleSheetManager target={this.state.iframe}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </>
    );
  }
}

export default CSSInjector;
