import Link from 'next/link'
import { useGlobalState } from "../../state/store";

const ProductsP = (props) => {
    return (
        <>
            <h3>Our Products</h3>

            <ul className="list-group">
                {
                    props.products && props.products.map(product => (
                        <li key={product.name} className="list-group-item">
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default ProductsP;