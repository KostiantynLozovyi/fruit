import React, { useState } from 'react'

import '../OrderScreen/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { BANANA_PRICE, APPLE_PRICE, PAPAYA_PRICE } from '../../constants/index'
import { removeApples, removeBananas, removePapayas } from '../../redux/actions'



export default function OrderScreen() {
    const { bananas, apples, papayas } = useSelector(state => state.fruits)
    
    const dispatch = useDispatch()

    const totalPrice = () => {
        return bananas.sum + apples.sum + papayas.sum
    }

    const removeBanana = () => {
        if (bananas.kilo >= 1){
            dispatch(removeBananas(bananas.sum - BANANA_PRICE))
        }
    }

    const removeApple = () => {
        if (apples.kilo >= 1) {
            dispatch(removeApples(apples.sum - APPLE_PRICE))
        }

    }

    const removePapaya = () => {
        if (papayas.kilo >= 1) {
            dispatch(removePapayas())
        }
    }

    return (
        <div>
            <div className='link'>
                <nav>
                    <Link className='main_order_link' to='/'>Main</Link>
                </nav>
            </div>
            <div className='span_order'>
                <span>YOUR ORDER</span>
            </div>
            <div className='ordered'>
                <div className='ordered_fruits'>
                    <div>
                        <span>Banana:{bananas.kilo}(kilo)</span>
                        <p>
                            <span>Total Banana's Price :{bananas.sum}</span>
                        </p>
                    </div>
                    <button className='button_remove' onClick={removeBanana}>
                        Remove 1 kilo
                    </button>
                </div>
                <div className='ordered_fruits'>
                    <div>

                        <span>Apple:{apples.kilo}(kilo)</span>
                        <p>
                            <span>Total Apple's Price : {apples.sum}</span>
                        </p>
                    </div>
                    <button className='button_remove' onClick={removeApple}>
                        Remove 1 kilo
                    </button>
                </div>
                <div className='ordered_fruits'>
                    <div>

                        <span>Papaya:{papayas.kilo}(kilo)</span>
                        <p>
                            <span>Total Papaya's Price : {papayas.sum}</span>
                        </p>
                    </div>
                    <button className='button_remove' onClick={removePapaya}>
                        Remove 1 kilo
                    </button>
                </div>
                <div>
                    <span><strong>The Final Price:{totalPrice()}</strong></span>
                </div>
            </div>
        </div>
    )
}
