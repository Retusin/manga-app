import Layout from '../components/Layout/Layout';
import 'react-slideshow-image/dist/styles.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
