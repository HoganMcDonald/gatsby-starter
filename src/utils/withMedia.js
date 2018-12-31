import React, { Component, createContext } from 'react';

const breakpoints = {
  large: 'screen and (min-width: 64rem)',
  medium: 'screen and (min-width: 52rem)',
  small: 'screen and (min-width: 42rem)',
  xsmall: 'screen and (max-width: 42rem)'
};

const { Provider, Consumer } = createContext('large');

class DeviceProvider extends Component {
  calcDevice = () => {
    for (let breakpoint in breakpoints) {
      const { matches } =
        typeof window !== `undefined`
          ? window.matchMedia(breakpoints[breakpoint])
          : 'large';
      if (matches) return breakpoint;
    }
  };

  state = {
    device: this.calcDevice()
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDeviceType, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDeviceType);
  }

  updateDeviceType = () => this.setState({ device: this.calcDevice() });

  render() {
    return <Provider value={this.state.device}>{this.props.children}</Provider>;
  }
}

const withDevice = Component => {
  return function DeviceProvider(props) {
    return (
      <Consumer>{state => <Component {...props} device={state} />}</Consumer>
    );
  };
};

export { DeviceProvider, withDevice };
