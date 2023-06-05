import * as React from "react"
import { useState } from "react"
import { Product } from "../../data/products"

interface FormValues {
  title: string
  price: number
  imageUrl: string
}

interface AddItemsProps {
  addProduct: (product: Product) => void
}

const AddItems: React.FC<AddItemsProps> = ({ addProduct }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    price: 0,
    imageUrl: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const newProduct = {
      title: formValues.title,
      price: formValues.price,
      imageUrl: formValues.imageUrl,
      // todo: use real IDs
      id: Math.random()
    }
    addProduct(newProduct)
    // Reset the form values
    setFormValues({ title: "", price: 0, imageUrl: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formValues.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">imageUrl:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formValues.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddItems