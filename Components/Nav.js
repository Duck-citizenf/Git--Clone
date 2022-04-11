import Link from 'next/link'
import Script from 'next/script'

const Nav = ({product}) => {
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
                                    <span className="count">1</span>
                                </span>
                                <div tabIndex="0">Getränkekorb</div>
                            </span>
                        </div>
                        <div className="relative header__minicart">
                            <div className="header__platform-right">
                                <a className="header__basket-logo">Mein Getränkekorb</a>
                                <div className="pt-15">
                                    <div className="header__basket-list">
                                        <div className="flex relative header__basket-middle">
                                            <span className="bottle"><img src="/images/like.png"/></span>
                                            <div className="wide">
                                                <a>Der Hopfen Gin</a>
                                                <div className="flex header__basket-line">
                                                    <select>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                    <option>13</option>
                                                    <option>14</option>
                                                    <option>15</option>
                                                    <option>16</option>
                                                    <option>17</option>
                                                    <option>18</option>
                                                    <option>19</option>
                                                    <option>20</option>
                                                    </select>
                                                    <a>€29,50</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex header__basket-line">
                                        <a className="flex header__basket-price">Summe</a>
                                        <a className="black-000 font-bold">€29,50</a>
                                    </div>
                                </div>
                                <div className="button">
                                    <button>Getränkekorb ansehen</button>
                                    <button>Kasse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="page-top">
                    <div className="flex page-top__header">
                        <div>% SALE</div>
                        <div>CRAFT BEER</div>
                        <div className="relative page-top__dropdown">
                            <button className="page-top__dropbtn">
                                <Link href={`/category/gin`}>GIN</Link>
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
                                    <a>MAGAZIN</a>
                                </Link>
                                <a>GIN-REZEPTE</a>
                            </div>
                        </div>
                        <div className="flex page-top__search">SUCHE<img src="/images/like.png"/></div>
                    </div>
            </div>
            <Script src='/getdata.js'/>
        </header>
    )
}

export default Nav