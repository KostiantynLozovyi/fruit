import React from 'react'
import './style.css'

export default function FruitCard(props) {
    return (
        <div className='fruit'>
            <img src={props.img} className='images' alt='img-banana' />
            <p>{props.title}</p>
            <p>Price:{props.price}$</p>
            <div>
                <button
                    onClick={props.onClick}
                >Add to Order</button>

            </div>
            {props.sale && 
            <div className='sale'>
                <div className='sale_text'>
                    Sale
                </div>
            </div>}
        </div>
    )
}
