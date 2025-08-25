import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "../data/products";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = new Promise((resolve, reject) => {
        const item = products.find((p) => p.id === parseInt(id));
        setTimeout(() => {
            if (item) resolve(item);
            else reject("Product not found");
        }, 500);
    });

        fetchProduct
        .then((res) => setProduct(res))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Loading product...</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div style={{ padding: "2rem" }}>
        <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;