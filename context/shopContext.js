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
          let newCart = [...cart] // new object from existing cart
          
          cart.map(item => {
            if (item.id === newItem.id) // if item already in cart
            {
              item.variantQuantity++ // +1 to value
              newCart = [...cart]
            } 
            else {
                newCart = [...cart, newItem] // add new item on top
            }
          })
          setCart(newCart)
          const newCheckout = await updateCheckout(checkoutId, newCart)
          localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
        }
    }
    return (
        <CartContext.Provider value={{ 
          cart,
          addToCart,
          checkoutUrl
        }}>
          {children}
        </CartContext.Provider>
    )
}
const ShopConsumer = CartContext.Consumer
export {ShopConsumer,CartContext}