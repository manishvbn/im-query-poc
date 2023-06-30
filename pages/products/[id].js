import Head from 'next/head';
import { getProducts } from '../../data';
import { StateProvider } from '../../state/store';
// import ProductP from '../../components/products-props/ProductP';
// import ProductsP from '../../components/products-props/ProductsP';
import Product from '../../components/products/Product';
import Products from '../../components/products/Products';

export default function ProductDetailsPage({ product, products }) {
    return (
        <StateProvider serviceData={{ product, products }}>
            <Head>
                <title>Product Details Page</title>
                <meta name="description" content="Product Details" />
            </Head>

            <div className="container">
                <Product />

                <div className='mt-5'>
                    <Products />
                </div>
            </div>
        </StateProvider>
    );

    // return (
    //     <>
    //         <Head>
    //             <title>Product Details Page</title>
    //             <meta name="description" content="Product Details" />
    //         </Head>

    //         <div className="container">
    //             <ProductP product={product} />

    //             <div className='mt-5'>
    //                 <ProductsP products={products} />
    //             </div>
    //         </div>
    //     </>
    // );
}

export async function getServerSideProps({ req, res, params }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=31536000, immutable'
    );

    const products = await getProducts();
    const product = products.find(p => p.id === params.id);

    return {
        props: {
            product, products
        }
    }
}