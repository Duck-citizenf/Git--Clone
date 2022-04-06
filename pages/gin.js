import Link from 'next/link'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Script from 'next/script'
import {getProductsInCollection} from '../lib/shopify'

async function addToCart(newItem){
    
}
export default function gin({allProducts}) {
    console.log({allProducts})
  return (
        <body>
            <Nav/>
            <div className="flex main">
                <div className="main__filters">
                    <details>
                        <summary>
                            Preis
                        </summary>
                        € <input className="main__price-range"/> - € <input class="main__price-range"/>
                    </details>
                    <details>
                        <summary>
                            Stil
                        </summary>
                        <div className="flex flex-column">
                            <input className="main__input" placeholder="Suche"/>
                            <a className="main__alco-sort"><input type="checkbox"/> Alkoholfreie Spirituosen Probierpaket</a>
                            <a className="main__alco-sort"><input type="checkbox"/> Alkoholfreier Gin</a>
                        </div>
                    </details>
                </div>
                <div>
                    <div className="flex flex-column">
                        <span className="main__Header1">GIN</span>
                        <span className="main__Header2">Gin kaufen in unserem Onlineshop. Direkt von kleinen, regionalen Produzenten bestellen.</span>
                    </div>
                    <div className="main__catalog">
                        <div className="text-center main__gin-row">
                            <div className="relative main__in-img">
                                <Link href="/product-page">
                                    <a>
                                        <img src='/images/Dry.png' width="200" height="200"/>
                                    </a>
                                </Link>
                                <div className="main__card-top-font">
                                    DRY GIN 
                                    <a className="main__heart">♡</a> 
                                    <div className="flex main__stikos">
                                        <a>Kostenloser<br/>Versand</a> 
                                        <a>Spare<br/>6%</a>
                                    </div> 
                                </div>
                                <div className="main__card-middle-font">
                                    Dry gin
                                </div>
                                <div className="main__card-price-font">
                                    €
                                    <a className="main__card-end-font">20,00</a>
                                    <a className="button">
                                        <button class="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div className="button">
                                    <button className="product1" onClick={()=>{addToCart(allProducts[0].node.id)}
                                        }>In meinen Getränkekorb
                                    </button>
                                </div>
                            </div>
                            <div className="relative main__in-img">
                                <img src='/images/Solid.png'  width="200" height="200"/>
                                <div className="main__card-top-font">
                                    Solid gin 
                                    <a className="main__heart">♡</a> 
                                </div>
                                <div className="main__card-middle-font">
                                    Solid gin
                                </div>
                                <div className="main__card-price-font">
                                    €
                                    <a className="main__card-end-font">20,00</a>
                                    <a className="button">
                                        <button className="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div className="button">
                                    <button>In meinen Getränkekorb</button>
                                </div>
                            </div>
                            <div className="relative main__in-img">
                                <img src='/images/Liquid.png' width="200" height="200"/>
                                <div className="main__card-top-font">
                                    Liquid gin 
                                    <a className="main__heart">♡</a> 
                                </div>
                                <div className="main__card-middle-font">
                                    Liquid gin
                                </div>
                                <div className="main__card-price-font">
                                    €
                                    <a className="main__card-end-font">20,00</a>
                                    <a className="button">
                                        <button className="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div className="button">
                                    <button>In meinen Getränkekorb</button>
                                </div>
                            </div>
                            <div className="relative main__in-img">
                                <img src='/images/Pure.png' width="200" height="200"/>
                                <div className="main__card-top-font">
                                    Pure gin 
                                    <a className="main__heart">♡</a> 
                                </div>
                                <div className="main__card-middle-font">
                                    Pure gin  
                                </div>
                                <div className="main__card-price-font">
                                    €
                                    <a className="main__card-end-font">20,00</a>
                                    <a className="button">
                                        <button className="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div className="button">
                                    <button>In meinen Getränkekorb</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="expander">
            </div>
            <Footer/>
            <Script src='/getdata.js'/>
        </body>
    )
}
export async function getStaticProps() {
    const allProducts = await getProductsInCollection()
  
    return {
      props: { allProducts }, // will be passed to the page component as props
    }
  }