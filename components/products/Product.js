import React from "react";
import { useGlobalState } from "../../state/store";
import classes from './product.module.css';

export default function Product() {
    const product = useGlobalState().state.product;

    return (
        (product !== undefined) ? (
            <div className={classes.someCSSModulesClass}>
                <div className="card" style={{ width: '300px' }}>
                    <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{`Price: $ ${product.price}`}</p>
                    </div>
                </div>
            </div>
        ) : null
    )
}