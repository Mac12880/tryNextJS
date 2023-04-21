import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
  <SSRProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </SSRProvider>
  )
}
