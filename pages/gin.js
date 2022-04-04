import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

async function addToCart(newItem){
    
}
export default function gin() {
  return (
        <body>
            <Nav/>
            <div class="flex main">
                <div class="main__filters">
                    <details>
                        <summary>
                            Preis
                        </summary>
                        € <input class="main__price-range"/> - € <input class="main__price-range"/>
                    </details>
                    <details>
                        <summary>
                            Stil
                        </summary>
                        <div class="flex flex-column">
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
                    <div class="main__catalog">
                        <div class="text-center main__gin-row">
                            <div class="relative main__in-img">
                                <Link href="/product-page">
                                    <a>
                                        <img src='/images/Dry.png' width="200" height="200"/>
                                    </a>
                                </Link>
                                <div class="main__card-top-font">
                                    DRY GIN 
                                    <a class="main__heart">♡</a> 
                                    <div class="flex main__stikos">
                                        <a>Kostenloser<br/>Versand</a> 
                                        <a>Spare<br/>6%</a>
                                    </div> 
                                </div>
                                <div class="main__card-middle-font">
                                    Dry gin
                                </div>
                                <div class="main__card-price-font">
                                    €
                                    <a class="main__card-end-font">20,00</a>
                                    <a class="button">
                                        <button class="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div class="button">
                                    <button onClick={()=>{addToCart(selectedVariant)}
                                        }>In meinen Getränkekorb
                                    </button>
                                </div>
                            </div>
                            <div class="relative main__in-img">
                                <img src='/images/Solid.png'  width="200" height="200"/>
                                <div class="main__card-top-font">
                                    Solid gin 
                                    <a class="main__heart">♡</a> 
                                </div>
                                <div class="main__card-middle-font">
                                    Solid gin
                                </div>
                                <div class="main__card-price-font">
                                    €
                                    <a class="main__card-end-font">20,00</a>
                                    <a class="button">
                                        <button class="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div class="button">
                                    <button>In meinen Getränkekorb</button>
                                </div>
                            </div>
                            <div class="relative main__in-img">
                                <img src='/images/Liquid.png' width="200" height="200"/>
                                <div class="main__card-top-font">
                                    Liquid gin 
                                    <a class="main__heart">♡</a> 
                                </div>
                                <div class="main__card-middle-font">
                                    Liquid gin
                                </div>
                                <div class="main__card-price-font">
                                    €
                                    <a class="main__card-end-font">20,00</a>
                                    <a class="button">
                                        <button class="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div class="button">
                                    <button>In meinen Getränkekorb</button>
                                </div>
                            </div>
                            <div class="relative main__in-img">
                                <img src='/images/Pure.png' width="200" height="200"/>
                                <div class="main__card-top-font">
                                    Pure gin 
                                    <a class="main__heart">♡</a> 
                                </div>
                                <div class="main__card-middle-font">
                                    Pure gin  
                                </div>
                                <div class="main__card-price-font">
                                    €
                                    <a class="main__card-end-font">20,00</a>
                                    <a class="button">
                                        <button class="main__cart-button">⚖</button>
                                    </a>
                                </div>
                                <div class="button">
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
        </body>
    )
}
