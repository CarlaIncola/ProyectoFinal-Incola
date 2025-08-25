import Item from "./Item";

const ItemList = ({ products }) => {
    if (!products) return <p>Loading...</p>;

    return (
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {products.length > 0 ? (
            products.map((product) => <Item key={product.id} product={product} />)
        ) : (
            <p>No products found.</p>
        )}
        </div>
    );
};

export default ItemList;
