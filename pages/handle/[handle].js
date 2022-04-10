import Image from 'next/image'
import Script from 'next/script'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'
import {getProduct, getAllProducts} from "../../lib/shopify"

export default function Home({products}) {
  return (
        <body>
            <Nav/>
            <div class="main-content">
                <div class="flex">
                    <div class="gallery_product">
                        <div class="gallery__sale">
                            SALE
                        </div>
                        <div class="gallery__path">
                            <a className="gallery__path-line">Homepage</a>
                            <a className="gallery__path-slash">/</a>
                            <a className="gallery__path-line">Gin</a>
                            <a className="gallery__path-slash">/</a>
                            <a className="gallery__path-last">Dry Gin</a>
                        </div>
                        <div data-swipe-threshold="100" id="o1" class="gallery-1_product">
                            <div class="gallery-img"><img src='/images/Dry.png'/></div>
                            <div class="gallery-img"><img src='/images/Dry1.png'/></div>
                            <div class="gallery-img"><img src='/images/Dry2.png'/></div>
                        </div>
                        <div class="gallery-button">
                            <input type="image" class="gallery_1_product" src="images/like.png"/>
                            <input type="image" class="gallery_2_product" src="images/like.png"/>
                            <input type="image" class="gallery_3_product" src="images/like.png"/>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product__title">DRY GIN</div>
                        <div class="product__price">
                            <span class="product__main">€29,50</span>
                            <span class="product__bottom-price">+ 0,15€ Pfand</span>
                            <span class="product__top-price">(€59,00 pro l)</span>
                            <span class="product__matter-size">Inhalt: <strong>0,5 l</strong></span>
                        </div>
                        <div class="product__tax">
                            inkl. MwSt
                        </div>
                        <div class="product__pre-price">
                            <span class="product__price-was"><strike>€35,80</strike></span> 
                            <span class="product__price-net">Du sparst: €6,30 (18%)</span> 
                        </div>
                        <div class="amount">
                            <div class="inline-block w-93px">
                                <a class="amount_plus">+</a>
                                <input type="text" value='1' class="amount_number"/>
                                <a class="amount_minus">-</a>
                            </div>
                            <div class="amount_button_container"><button class="amount_button">In meinen Getränkekorb</button></div>
                            <div class="marked_storage">&amp;&nbsp;Auf Lager</div>
                            <div class="amount_favorite">
                                ♡
                            </div>
                        </div>
                        <div class="bonuses">
                            <div class="flex">
                                <div class="mt-10"><img src="/images/like.png"/></div>
                                <div class="bonuses_exp mt-10">Sichere <br/> Bezahlung</div>
                            </div>
                            <div class="flex">
                                <div class="mt-10"><img src="/images/like.png"/></div>
                                <div class="bonuses_exp mt-10">Telefonische <br/> Beratung</div>
                            </div>
                            <div class="flex last">
                                <div class="bonuses_exp mt-10">Alle <br/> Getränke <br/> von</div>
                                <div class="mt-10"><img src="/images/like.png"/></div>
                            </div>
                        </div>
                        <div class="Lieferung">
                            Lieferung
                        </div>
                        <div class="others">
                            <span class="mr-6">Versand:</span>
                            <span>€0,00</span>
                        </div>
                        <div class="others">
                            <span class="mr-6">Lieferzeit:</span>
                            <span>3-5 Tage</span>
                        </div>
                        <div class="others">
                            <span class="mr-6">Verkauf und Versand durch:</span>
                            <span>Honest &amp; Rare (Versender: Braumanufaktur Hertl)</span>
                        </div>
                    </div>
                </div>
                <div class="featuress flex">
                    <div class="features">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">Gin</span>
                    </div>
                    <div class="features">
                        <span class="mx-auto"><img src="/images/like.png"/></span>
                        <span class="features_text">blumig, herb, <br/> fruchtig, Mandarine</span>
                    </div>
                    <div class="features">
                        <span class="mx-auto"><img src="/images/like.png"/></span>
                        <span class="features_text">Hallertauer <br/> Mandarina</span>
                    </div>
                    <div class="features">
                        <span class="mx-auto"><img src="/images/like.png"/></span>
                        <span class="features_text">Schlüsselfeld, Bayern</span>
                    </div>
                    <div class="features odd">
                        <span class="mx-auto"><img src="/images/like.png"/></span>
                        <span class="features_text">37.5% vol.</span>
                    </div>
                </div>
                <div class="flex mt-58 block">
                    <div class="tab_warp">
                        <input type="radio" name="tab" id="rad1" class="radio1" checked/>
                        <label for="rad1" class="radio1_tab">Produktbeschreibung</label>
                        <input type="radio" name="tab" id="rad2" class="radio2"/>
                        <label for="rad2" class="radio2_tab">Herstellerinformationen</label>
                        <div class="bottle_tab">
                            <img src='/images/beauty shot.png'/>
                        </div>
                        <div class="map_tab">
                            <img src='/images/top-logo.png'/>
                        </div>
                    </div>
                </div>
                <div class="liters">
                    <div class="liters_content">
                        <span>Inhalt:</span>
                        <div class="affixes">0,5 Liter</div>
                    </div>
                    <div class="liters_content gray">
                        <span>Hersteller:</span>
                        <div class="affixes">Braumanufaktur Hertl</div>
                    </div>
                    <div class="liters_content">
                        <span>Abfüllmenge:</span>
                        <div class="affixes">200 Flaschen</div>
                    </div>
                    <div class="liters_content gray">
                        <span>Getränketyp:</span>
                        <div class="affixes">Gin</div>
                    </div>
                    <div class="liters_content">
                        <span>Lebensmittelunternehmen:</span>
                        <div class="affixes">Braumanufaktur Hertl, Thüngfeld 61, 96132 Schlüsselfeld</div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Script type="text/javascript" src="/swiped-events.min.js"/>
            <Script type="text/javascript" src="/product-js.js"/>
        </body>
    )
}
export async function getStaticPaths() {
    
    const string = await getAllProducts();
    const paths = string.map(item=>{const tttt = String(item.node.handle)
      return{
        params: {handle:tttt}
      }
    })
    return{
      paths,
      fallback: false
    }
}

export async function getStaticProps({params}){
    const products = await getProduct(params.product)
  
    return {
      props: {
        products
      }
    }
  }