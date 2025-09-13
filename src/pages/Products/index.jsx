import { useEffect } from "react";
import { products } from "../../services/products"

const Products = () => {

    useEffect(() => {
        services.products.getAll()
        .then(data => console.log(data));
    }, [] )
    return (
        <div>
            <h2>Productos</h2>
        </div>
    )

}

export default Products;