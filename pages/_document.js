import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        {/* <body className="bg-white dark:bg-black text-white dark:text-black"> */}
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument