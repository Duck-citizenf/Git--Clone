import { Fragment, useContext, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { CartContext } from '../context/shopContext'

export default function MiniCart({ cart }) {
    const cancelButtonRef = useRef()

    const { cartOpen, setCartOpen, checkoutUrl, removeCartItem } = useContext(CartContext)
    
    const countryData = [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' }, 
        { value: '4', name: '4' }, 
        { value: '5', name: '5' },            
        { value: '6', name: '6' }, 
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' }
    ]
    let cartTotal = 0
    cart.map(item => {
      cartTotal += item?.variantPrice * item?.variantQuantity
    })
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
                                    <div>
                                    <select>
                                    {countryData.map((e, key) => {
                                        if(e.value==product.variantQuantity){
                                            return <option key={key} value={e.value} selected>{e.name}</option>;
                                        }
                                        else{
                                            return <option key={key} value={e.value}>{e.name}</option>;
                                        }   
                                    })}
                                    </select>
                                    <span className='px-10 pointer font-22' onClick={() => removeCartItem(product.id)}>🗑</span>
                                    </div>
                                    <a>{product.variantPrice}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className="flex header__basket-line">
                        <a className="flex header__basket-price">Summe</a>
                        <a className="black-000 font-bold">€{cartTotal}</a>
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