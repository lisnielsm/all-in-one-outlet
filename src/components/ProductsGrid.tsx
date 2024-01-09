import { Product } from "@/products"
import { ProductCard } from ".";


interface Props {
  products: Product[];
}

export const ProductsGrid = ({ products } : Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      { products.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  )
}
