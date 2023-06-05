export const products: Product[] = [
  {
    title: 'name',
    price: 123,
    imageUrl: 'url',
    id: 123
  },
  {
    title: 'name2',
    price: 456,
    imageUrl: 'url',
    id: 456
  }
]

export interface Product {
  title: string
  price: number
  imageUrl: string
  id: number
}