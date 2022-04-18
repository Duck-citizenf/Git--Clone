import '../csss/index.css'
import '../csss/common__honest-rare.css'
import '../csss/magazin.css'
import '../csss/gin.css'
import '../csss/product-page.css'
import ShopProvider from '../context/shopContext'
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <ShopProvider>
            <Component {...pageProps} key={router.asPath}/>
        </ShopProvider>
    )
  }
  
  export default MyApp