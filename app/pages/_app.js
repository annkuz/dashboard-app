import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';

class DashboardApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }


  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }


  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <title>Dashboard App</title>
      </Head>
    );
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {this.renderHead()}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }

}

export default DashboardApp;