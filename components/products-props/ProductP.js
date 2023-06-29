import Image from "next/image";
import React from "react";

export default function ProductP(props) {
    return (
        (props.product !== undefined) ? (
            <div className="card" style={{ width: '300px' }}>
                <Image
                    src={props.product.imageUrl}
                    className="card-img-top"
                    alt={props.product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <p className="card-text">{`Price: $ ${props.product.price}`}</p>
                </div>
            </div>) : null
    )
}