import React from 'react'

import '../OrderScreen/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import {  NavLink } from 'react-router-dom'

import { BANANA_PRICE, APPLE_PRICE,  } from '../../constants/index'
import { removeApples, removeBananas, removePapayas } from '../../redux/actions'
import FruitOrder from '../../Components/FruitOrder'



export default function OrderScreen() {
    const { bananas, apples, papayas } = useSelector(state => state.fruits)
    
    const dispatch = useDispatch()

    const totalPrice = () => {
        return bananas.sum + apples.sum + papayas.sum
    }

    const totalPriceFruits = totalPrice();

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
                    <NavLink className='main_order_link' to='/'>Main</NavLink>
            </div>
            <div className='span_order'>
                 {totalPriceFruits ? <span>YOUR ORDER</span> : <span>EMPTY ORDER</span> }
            </div>
            <div className='ordered'>
                {bananas.kilo ? <FruitOrder onRemove={removeBanana} kilo={bananas.kilo } sum={bananas.sum} title='Banana'/> : null}
                {apples.kilo ? <FruitOrder onRemove={removeApple} kilo={apples.kilo} sum={apples.sum} title='Apple' /> : null}
                {papayas.kilo ? <FruitOrder onRemove={removePapaya} kilo={papayas.kilo} sum={papayas.sum} title='Papaya' /> : null}
                <div>
                    {totalPriceFruits ? <span><strong>The Final Price: {totalPriceFruits}</strong></span> : null}
                </div>
            </div>
        </div>
    )
}
