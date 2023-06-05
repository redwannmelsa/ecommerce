import * as React from "react"
import { useCart } from "../../context/CartContext"
import { Product } from "../../data/products"
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <div className="product-desc">
        <div className="product-item">
          <h3>{product.title}</h3>
          <p>{product.price}€</p>
        </div>
        <button onClick={addToCart}>+</button>
      </div>
    </div>
  )
}

export default ProductCard