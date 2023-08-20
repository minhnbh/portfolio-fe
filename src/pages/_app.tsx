import App from "next/app";
import '@assets/scss/index.scss';

class WebApp extends App {
  render() {
    const { Component } = this.props;
    return <Component {...this.props} />;
  }
}

export default WebApp;
