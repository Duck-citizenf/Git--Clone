import { Fragment, useContext, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../context/shopContext'

export default function MiniCart({ cart }) {
    const cancelButtonRef = useRef()

    const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } = useContext(CartContext)
    
    let cartTotal = 0
    cart.map(item => {
      cartTotal += item?.variantPrice * item?.variantQuantity
    })
    console.log(cart)
    return (
        <div className="relative header__minicart">
            <div className="header__platform-right">
                <a className="header__basket-logo">Mein Getränkekorb</a>
                <div className="pt-15">
                    {cart.map((product)=>(
                    <div className="header__basket-list">
                        <div className="flex relative header__basket-middle">
                            <span className="bottle"><img src="/images/like.png"/></span>
                            <div className="wide">
                                <a>{product.title}</a>
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
                                    <a></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className="flex header__basket-line">
                        <a className="flex header__basket-price">Summe</a>
                        <a className="black-000 font-bold">{cartTotal}</a>
                    </div>       
                </div>
                <div className="button">
                    <button><a class="link-style_white" href={checkoutUrl}>Getränkekorb ansehen</a></button>
                    <button>Kasse</button>
                </div>
            </div>
            
        </div>    
    )
}