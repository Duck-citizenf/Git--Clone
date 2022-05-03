import Link from 'next/link'
import Script from 'next/script'
import { useContext } from "react"
import { CartContext } from "../context/shopContext"
import MiniCart from "./MiniCart"

export default function Nav() {
        const {cart,cartOpen,setCartOpen}=useContext(CartContext)
        let cartQuantity = 0
        cart.map(item=>{
          return (cartQuantity += item?.variantQuantity)
        })
        return (
        <header>
            <div className="flex header-strip">
                <p>✔ Über 1.000 Getränke direkt vom Hersteller bestellen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔ Nichts aus dem Supermarkt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✔ Wir beraten dich: 030-99004741</p>
            </div>
            <div className="flex header">
                <div tabIndex="0" className="header__menu">
                    <div tabIndex="0" className="header__burger">☰</div>
                    <div className="header__platform">
                        <a>% SALE</a>
                        <a>CRAFT BEER</a>
                        <div tabIndex="0" className="header__menu">
                            <a>GIN</a>
                            <div className="relative header__platform">
                                <a className="header__options">Dry</a>
                                <a className="header__options">Pure</a>
                                <a className="header__options">Liquid</a>
                                <a className="header__options">Solid</a>
                            </div>
                        </div>
                        <a>SPIRITUOSEN</a>
                        <a>WEIN</a>
                        <a>KAFFEE</a>
                        <a>LIMOS</a>
                        <a>PAKETE</a>
                        <a>WISSEN</a>
                    </div>
                </div>
                <div className="header__logo">
                    <Link href="/">
                        <a>
                            <img src="/images/top-logo.png"/>
                        </a>
                    </Link>
                </div>
                <div className="flex text-center header__buttons">
                    <span className="header__button-margins">
                        <img src="/images/like.png"/>
                        <div>Love-List</div>   
                    </span>
                    <span className="header__button-margins">
                        <img src="/images/like.png"/>
                        <div>Mein Konto</div> 
                    </span>
                    <div tabIndex="0" className="header__basket">
                        <div tabIndex="0" className="header__buttons">
                            <span tabIndex="0" className="header__button-margins">
                                <span tabIndex="0" className="relative">
                                    <img src="/images/like.png"/>
                                    <span className="count">{cartQuantity}</span>
                                </span>
                                <div tabIndex="0">Getränkekorb</div>
                            </span>
                        </div>
                        <MiniCart cart={cart}/>
                    </div>
                </div>
            </div>
            <div id="page-top">
                    <div className="flex page-top__header">
                        <div>% SALE</div>
                        <div>CRAFT BEER</div>
                        <div className="relative page-top__dropdown">
                            <button className="page-top__dropbtn">
                                <Link href={`/category/gin`}><a className="link-style">GIN</a></Link>
                            </button>
                            <div className="page-top__dropdown-content">
                                <a>Dry</a>
                                <a>Pure</a>
                                <a>Liquid</a>
                                <a>Solid</a>
                            </div>
                        </div>
                        <div>SPIRITUOSEN</div>
                        <div>WEIN</div>
                        <div>KAFFEE</div>
                        <div>LIMOS</div>
                        <div>PAKETE</div>
                        <div className="flex page-top__dropdown">
                            <button className="page-top__dropbtn">WISSEN</button>
                            <div className="page-top__dropdown-content">
                                <Link href="/magazin">
                                    <a className='link-style'>MAGAZIN</a>
                                </Link>
                                <a>GIN-REZEPTE</a>
                            </div>
                        </div>
                        <div className="flex page-top__search">SUCHE<img src="/images/like.png"/></div>
                    </div>
            </div>
        </header>
    )
}