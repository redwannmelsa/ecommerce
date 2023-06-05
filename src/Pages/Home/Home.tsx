import { useState } from 'react'
import AddItems from '../../components/AddItems/AddItems'
import Navbar from '../../components/navbar/navbar'
import ProductCard from '../../components/ProductCard/ProductCard'

import { Product, products } from '../../data/products'

const Home = () => {

  const [inputProduct, setInputProduct] = useState<Product[]>(products)

  const addProduct = (product: Product) => {
    setInputProduct([...inputProduct, product])
  }

  return (
    <>
      <Navbar />
      <AddItems addProduct={addProduct} />
      <div style={{
        display: 'flex'
      }}>
        {
          inputProduct.map((product, i) => (
            <ProductCard
              product={product}
              key={i}
            />
          ))
        }
      </div>
    </>
  )
}

export default Home