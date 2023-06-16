import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
// import '../styles/product.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);

  const getLayout = Component.getLayout || ((page) => <> {page} </>)

  return getLayout(<Component {...pageProps} />);
}

export default MyApp