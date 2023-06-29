import Link from 'next/link'
import { useGlobalState } from "../../state/store";

const Products = () => {
    const products = useGlobalState().state.products;

    return (
        <>
            <h3>Our Products</h3>

            <ul className="list-group">
                {
                    products && products.map(product => (
                        <li key={product.name} className="list-group-item">
                            <Link href={`/products/${product.id}`} prefetch={false}>{product.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Products;