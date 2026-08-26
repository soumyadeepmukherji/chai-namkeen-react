
const ProductCard = ({items}) => {
    return(
        <div className="product-card">
            <figure>
                <img src={items.image} alt="" />
            </figure>
            <h2>{items.name}</h2>
        </div>
    )
}

export default ProductCard