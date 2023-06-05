import * as React from "react"
import { createContext, useReducer, useContext } from "react"

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

interface CartAction {
  type: string
  payload?: any
}

const initialCartState: CartState = {
  cartItems: [],
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
}>({
  state: initialCartState,
  dispatch: () => null,
})

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, action.payload],
    //   }
    case "ADD_TO_CART":
      const newItem = action.payload
      const existingItem = state.cartItems.find((item) => item.id === newItem.id)

      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }
      } else {
        // If the item doesn't exist in the cart, add it with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        }
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)