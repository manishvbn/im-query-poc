import React from "react";
import { useGlobalState } from "../../state/store";
import classes from './product.module.css';
import Image from "next/image";

export default function Product() {
    const product = useGlobalState().state.product;

    return (
        (product !== undefined) ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className={classes.someCSSModulesClass}>
                    <div className="card" style={{ width: '300px' }}>
                        <Image
                            src={product.imageUrl}
                            alt={product.name} height={300} width={300}
                            className="card-img-top"
                        />
                        <div className="card-header">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{`Price: $ ${product.price}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    )
}