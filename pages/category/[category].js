import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav'
import Script from 'next/script'
import {useState, useContext} from 'react'
import { CartContext } from '../../context/shopContext'
import {getAllProducts, getProduct, getProductsInCollection} from '../../lib/shopify'

export default function gin({products}) {
    const {addToCart} = useContext(CartContext)
//   const defaultValues = {}
//   product.options.map(item => {
//     defaultValues[item.name]=item.values[0]
//   })

//   const [selectedVariant, setSelectedVariant] = useState(allVariantsOptions[0])
//   const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  return (
        <div>
            <Nav/>
            <div className="flex main">
                <div className="main__filters">
                    <details>
                        <summary>
                            Preis
                        </summary>
                        € <input className="main__price-range"/> - € <input className="main__price-range"/>
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
                            {products.map(product => {
                                
                                const selectedVariant = {id: product.node.variants.edges[0].node.id, variantQuantity: 1}
                                return (
                                    <div className="relative main__in-img">
                                    <Link href={`/products/${product.node.handle}`}>
                                        <a>
                                            <Image src={product.node.images.edges[0].node.originalSrc} width="200" height="200"/>
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
                                        {product.node.title}
                                    </div>
                                    <div className="main__card-price-font">
                                        €
                                        <a className="main__card-end-font">
                                            {product.node.priceRange.minVariantPrice.amount}
                                        </a>
                                        <a className="button">
                                            <button className="main__cart-button">⚖</button>
                                        </a>
                                    </div>
                                    <div className="button">
                                        {/* <button className="product1" onClick = {addToCart(selectedVariant)}> */}
                                        <button className="product1">
                                            In meinen Getränkekorb
                                        </button>
                                    </div>
                                </div>
                                )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="expander">
            </div>
            <Footer/>
            <Script src='/getdata.js'/>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = [
        {params: {category: 'gin'}},
        // TODO: fetch all 
    ]

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const products = await getProductsInCollection(params.category)
  
    return {
      props: {
        products
      }
    }
  }



//   const staticProps = await getStaticProps({params: {category: 'gin'}})
//   const html = await gin({params: staticProps.props})
