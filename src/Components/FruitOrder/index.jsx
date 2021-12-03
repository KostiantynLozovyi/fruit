
import React from 'react'

export default function FruitOrder(props) {
    return (
        <div className='ordered_fruits'>
            <div>
                <span>{props.title}: {props.kilo}(kilo)</span>
                <p>
                    <span>Total {props.title}'s Price: {props.sum}</span>
                </p>
            </div>
            <button className='button_remove' onClick={props.onRemove}>
                Remove 1 kilo
            </button>
        </div>
    )
}
