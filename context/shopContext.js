import { createContext, useState, useEffect } from 'react'
import { createCheckout, updateCheckout } from "../lib/shopify"

const CartContext = createContext()

export default function ShopProvider({children}) {
    const [cart, setCart] = useState([]) //declare array of products
    const [checkoutId, setCheckoutId] = useState('') //initial states
    const [checkoutUrl, setCheckoutUrl] = useState('') //initial states

    async function addToCart(newItem) {
        if(cart.length === 0) //if nothing in the cart
        {
          setCart([newItem]) 
    
        const checkout = await createCheckout(newItem.id, newItem.variantQuantity)

        setCheckoutId(checkout.id)
        setCheckoutUrl(checkout.webUrl)

        localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]))
        }
        else {
          
        }
    }
    return (
        <CartContext.Provider value={{ 
          cart,
          cartOpen,
          setCartOpen,
          addToCart,
          checkoutUrl
        }}>
          {children}
        </CartContext.Provider>
    )
}
const ShopConsumer = CartContext.Consumer
export {ShopConsumer,CartContext}