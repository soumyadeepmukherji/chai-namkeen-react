import Products from "../data/Products"
import ProductCard from "./ProductCard"

const ProductList = () => {
    
    return(
        <>
        {Products.map((item) => (
            <ProductCard key={item.id} items={item}  />
        ))}
        </>
    )
}

export default ProductList