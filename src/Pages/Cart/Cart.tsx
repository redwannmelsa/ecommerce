import * as React from "react"
import Navbar from "../../components/navbar/navbar"
import { useCart } from "../../context/CartContext"
import './cart.css'

const Cart: React.FC = () => {

  const { state, dispatch } = useCart()
  const { cartItems } = state

  const removeFromCart = (itemId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId })
  }

  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div>
      <Navbar />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.price}€</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Price: {getTotalPrice()}€</p>
    </div>
  )
}

export default Cart