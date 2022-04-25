import Image from 'next/image'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'
import {useState, useContext, React, useEffect} from 'react'
import {getProduct, getAllProducts} from "../../lib/shopify"
import { CartContext } from '../../context/shopContext'

export default function Home({product}) {
    const name = product.title
    console.log()
    const {addToCart} = useContext(CartContext)
    const allVariantsOptions = product.variants.edges?.map(variant => {
      const allOptions = {}
  
      variant.node.selectedOptions.map(item => {allOptions[item.name] = item.value})
      return{
        id: variant.node.id,
        title: product.title,
        handle: product.handle,
        image: variant.node.image?.originalSrc,
        options: allOptions,
        variantTitle: variant.node.title,
        variantPrice: variant.node.priceV2.amount,
        variantQuantity: 1
      }
    })
    const defaultValues = {}
    product.options.map(item => {
      defaultValues[item.name]=item.values[0]
    })
  
    const [selectedVariant, setSelectedVariant] = useState(allVariantsOptions[0])
    const [selectedOptions, setSelectedOptions] = useState(defaultValues)

    function setOptions(name,value){
      setSelectedOptions(prevState=>{
        return {...prevState, [name]:value}
      })
      const selection = {
        ...selectedOptions,
        [name]: value
      }
      allVariantsOptions.map(item => {
        if (JSON.stringify(item.options) === JSON.stringify(selection)) {
          setSelectedVariant(item)
        }
      })
    }
    useEffect(()=>{
        // button drag images
        document.querySelector('.gallery_1_product').addEventListener('click', move1);
        document.querySelector('.gallery_2_product').addEventListener('click', move2);
        document.querySelector('.gallery_3_product').addEventListener('click', move3);
        let a = 0;
        var o1 = document.getElementById("o1");
        function move1() {
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-1_product');
            a = 0;
        }
        function move2() {
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-2_product');
            a = 1;
        }
        function move3() {
            o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
            o1.classList.add('gallery-3_product');
            a = 2;
        }
        window.onload = function() {
            document.querySelector('.gallery-1_product').addEventListener('swiped-left', function(e) {
                console.log(e.type);
                console.log(e.target);
                console.log(e.detail);
                if (a==1){
                    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
                    o1.classList.add('gallery-3_product'); 
                    a=2;
                }
                if (a==0){
                    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
                    o1.classList.add('gallery-2_product'); 
                    a=1;
                }
                console.log(a);
            });

            document.querySelector('.gallery-1_product').addEventListener('swiped-right', function(e) {
                console.log(e.type);
                console.log(e.target);
                console.log(e.detail);
                if (a==1){
                    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
                    o1.classList.add('gallery-1_product'); 
                    a=0;
                }
                if (a==2){
                    o1.classList.remove('gallery-1_product', 'gallery-2_product', 'gallery-3_product');
                    o1.classList.add('gallery-2_product'); 
                    a=1;
                }
                console.log(a);
            });
        }

        //drag images phone
        !function(t,e){
            "use strict";
            "function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){
                n=n||{bubbles:!1,cancelable:!1,detail:void 0
            };
            var a=e.createEvent("CustomEvent");
            return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},
                    t.CustomEvent.prototype=t.Event.prototype),
            e.addEventListener("touchstart",function(t){
                if("true"===t.target.getAttribute("data-swipe-ignore"))return;
                s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),
            e.addEventListener("touchmove",function(t){
                if(!n||!a)
                return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),
            e.addEventListener("touchend",function(t){if(s!==t.target)return;
            var e=parseInt(l(s,"data-swipe-threshold","20"),10),
                o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,
                d="",
                p=t.changedTouches||t.touches||[];
                Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");
                if(""!==d){
                    var b={dir:d.replace(/swiped-/,""),
                    xStart:parseInt(n,10),
                    xEnd:parseInt((p[0]||{}).clientX||-1,10),
                    yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};
                    s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),
                    s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);
                    var n=null,a=null,u=null,i=null,r=null,s=null;
                    function l(t,n,a){
                        for(;t&&t!==e.documentElement;){
                            var u=t.getAttribute(n);
                            if(u)return u;t=t.parentNode
                        }
                        return a}}
                        (window,document);
        
    },[])
  return (
        <div>
            <Nav/>
            <div className="main-content-pc">
                <div className="flex-765">
                    <div className="gallery_product">
                            <div className="gallery__sale">
                                SALE
                            </div>
                            <div className="gallery__path">
                                <a className="gallery__path-line">Homepage</a>
                                <a className="gallery__path-slash">/</a>
                                <a className="gallery__path-line">Gin</a>
                                <a className="gallery__path-slash">/</a>
                                <a className="gallery__path-last">{name}</a>
                            </div>
                            <div data-swipe-threshold="100" id="o1" className="gallery-1_product">
                                <div className="gallery-img"><Image src={product.images.edges[0].node.originalSrc} width="585" height="400"/></div>
                                <div className="gallery-img"><Image src='/images/Dry1.png' width="585" height="400"/></div>
                                <div className="gallery-img"><Image src='/images/Dry2.png' width="585" height="400"/></div>
                            </div>
                            <div className="gallery-button">
                                <input type="image" className="gallery_1_product" src="/images/like.png"/>
                                <input type="image" className="gallery_2_product" src="/images/like.png"/>
                                <input type="image" className="gallery_3_product" src="/images/like.png"/>
                            </div>
                    </div>
                    <div className="main-content-phone">
                        <div className="product">
                            <div className="product__title">{name}</div>
                            <div className="product__price">
                                <span className="product__main">€{product.variants.edges[0].node.priceV2.amount}0</span>
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
                                <div className="amount_button_container">
                                    <button className="amount_button" onClick={()=>{addToCart(selectedVariant)}}>
                                        In meinen Getränkekorb
                                    </button>
                                </div>
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
                </div>
                <div className="main-content">
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
            </div>
            <Footer/>
        </div>
    )
}
export async function getStaticPaths() {
    
    const string = await getAllProducts();
    const paths = string.map(item=>{
        const product = String(item.node.handle)
        
      return{
        params: {product}
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