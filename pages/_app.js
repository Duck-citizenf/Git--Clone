import '../csss/index.css'
import '../csss/common__honest-rare.css'
import '../csss/magazin.css'
import '../csss/gin.css'
import '../csss/product-page.css'
import ShopProvider from '../context/shopContext'

function MyApp({ Component, pageProps }) {
    return (
        <ShopProvider>
            <Component {...pageProps}/>
        </ShopProvider>
    )
  }
  
  export default MyApp