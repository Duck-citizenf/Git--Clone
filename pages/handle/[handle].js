import Image from 'next/image'
import Script from 'next/script'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'
import {getProduct, getAllProducts} from "../../lib/shopify"

export default function Home(product) {
    console.log(product.handle) 
  return (
        <div>
            <Nav/>
            <div className="main-content">
                <div className="flex">
                    <div className="gallery_product">
                        <div className="gallery__sale">
                            SALE
                        </div>
                        <div className="gallery__path">
                            <a className="gallery__path-line">Homepage</a>
                            <a className="gallery__path-slash">/</a>
                            <a className="gallery__path-line">Gin</a>
                            <a className="gallery__path-slash">/</a>
                            <a className="gallery__path-last">Dry Gin</a>
                        </div>
                        <div data-swipe-threshold="100" id="o1" className="gallery-1_product">
                            <div className="gallery-img"><img src='/images/Dry.png'/></div>
                            <div className="gallery-img"><img src='/images/Dry1.png'/></div>
                            <div className="gallery-img"><img src='/images/Dry2.png'/></div>
                        </div>
                        <div className="gallery-button">
                            <input type="image" className="gallery_1_product" src="/images/like.png"/>
                            <input type="image" className="gallery_2_product" src="/images/like.png"/>
                            <input type="image" className="gallery_3_product" src="/images/like.png"/>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product__title">{product.handle}</div>
                        <div className="product__price">
                            <span className="product__main">€29,50</span>
                            <span className="product__bottom-price">+ 0,15€ Pfand</span>
                            <span className="product__top-price">(€59,00 pro l)</span>
                            <span className="product__matter-size">Inhalt: <strong>0,5 l</strong></span>
                        </div>
                        <div className="product__tax">
                            inkl. MwSt
                        </div>
                        <div className="product__pre-price">
                            <span className="product__price-was"><strike>€35,80</strike></span> 
                            <span className="product__price-net">Du sparst: €6,30 (18%)</span> 
                        </div>
                        <div className="amount">
                            <div className="inline-block w-93px">
                                <a className="amount_plus">+</a>
                                <input type="text" defaultValue='1' className="amount_number"/>
                                <a className="amount_minus">-</a>
                            </div>
                            <div className="amount_button_container"><button className="amount_button">In meinen Getränkekorb</button></div>
                            <div className="marked_storage">&amp;&nbsp;Auf Lager</div>
                            <div className="amount_favorite">
                                ♡
                            </div>
                        </div>
                        <div className="bonuses">
                            <div className="flex">
                                <div className="mt-10"><img src="/images/like.png"/></div>
                                <div className="bonuses_exp mt-10">Sichere <br/> Bezahlung</div>
                            </div>
                            <div className="flex">
                                <div className="mt-10"><img src="/images/like.png"/></div>
                                <div className="bonuses_exp mt-10">Telefonische <br/> Beratung</div>
                            </div>
                            <div className="flex last">
                                <div className="bonuses_exp mt-10">Alle <br/> Getränke <br/> von</div>
                                <div className="mt-10"><img src="/images/like.png"/></div>
                            </div>
                        </div>
                        <div className="Lieferung">
                            Lieferung
                        </div>
                        <div className="others">
                            <span className="mr-6">Versand:</span>
                            <span>€0,00</span>
                        </div>
                        <div className="others">
                            <span className="mr-6">Lieferzeit:</span>
                            <span>3-5 Tage</span>
                        </div>
                        <div className="others">
                            <span className="mr-6">Verkauf und Versand durch:</span>
                            <span>Honest &amp; Rare (Versender: Braumanufaktur Hertl)</span>
                        </div>
                    </div>
                </div>
                <div className="featuress flex">
                    <div className="features">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">Gin</span>
                    </div>
                    <div className="features">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">blumig, herb, <br/> fruchtig, Mandarine</span>
                    </div>
                    <div className="features">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">Hallertauer <br/> Mandarina</span>
                    </div>
                    <div className="features">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">Schlüsselfeld, Bayern</span>
                    </div>
                    <div className="features odd">
                        <span className="mx-auto"><img src="/images/like.png"/></span>
                        <span className="features_text">37.5% vol.</span>
                    </div>
                </div>
                <div className="flex mt-58 block">
                    <div className="tab_warp">
                        <input type="radio" name="tab" id="rad1" className="radio1" defaultChecked/>
                        <label htmlFor="rad1" className="radio1_tab">Produktbeschreibung</label>
                        <input type="radio" name="tab" id="rad2" className="radio2"/>
                        <label htmlFor="rad2" className="radio2_tab">Herstellerinformationen</label>
                        <div className="bottle_tab">
                            <img src='/images/beauty shot.png'/>
                        </div>
                        <div className="map_tab">
                            <img src='/images/top-logo.png'/>
                        </div>
                    </div>
                </div>
                <div className="liters">
                    <div className="liters_content">
                        <span>Inhalt:</span>
                        <div className="affixes">0,5 Liter</div>
                    </div>
                    <div className="liters_content gray">
                        <span>Hersteller:</span>
                        <div className="affixes">Braumanufaktur Hertl</div>
                    </div>
                    <div className="liters_content">
                        <span>Abfüllmenge:</span>
                        <div className="affixes">200 Flaschen</div>
                    </div>
                    <div className="liters_content gray">
                        <span>Getränketyp:</span>
                        <div className="affixes">Gin</div>
                    </div>
                    <div className="liters_content">
                        <span>Lebensmittelunternehmen:</span>
                        <div className="affixes">Braumanufaktur Hertl, Thüngfeld 61, 96132 Schlüsselfeld</div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Script type="text/javascript" src="/swiped-events.min.js"/>
            <Script type="text/javascript" src="/product-js.js"/>
        </div>
    )
}
export async function getStaticPaths() {
    
    const string = await getAllProducts();
    const paths = string.map(item=>{const handlesSet = String(item.node.handle)
      return{
        params: {handle:handlesSet}
      }
    })
    return{
      paths,
      fallback: false
    }
}

export async function getStaticProps({params}){
    const product = await getProduct(params.product)
  
    return {
      props: {
        product
      }
    }
  }