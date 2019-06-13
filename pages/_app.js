import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from "emotion-theming"
import { MDXProvider } from "@mdx-js/react"
import Router from "next/router";
import withGA from "next-ga";
import theme from '../theme'

import paragraph from '../elements/P'
import OrderedList from '../elements/Ol'
import ListItem from '../elements/Li'
import Image from '../elements/Img'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const components = {
      p: paragraph,
      ol: OrderedList,
      li: ListItem,
      img: Image,
    }


    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default withGA('UA-39529635-1',Router,)(MyApp);
