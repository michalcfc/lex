import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";



export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }
  render() {
    return (
      <Html lang="en">
          <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          </Head>
        <body>
          <Main />
          <NextScript />
         {/* <div id="zadarmaScripts"></div>
        <script type="text/javascript" src="js/zadarma.js"></script>
          <div id="myZadarmaCallmeWidget9378">Here</div>  */}
        </body>
      </Html>
    )
  }
}