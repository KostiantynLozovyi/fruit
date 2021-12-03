import React, { useState } from 'react'

import '../OrderScreen/styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import { BANANA_PRICE, APPLE_PRICE, PAPAYA_PRICE } from '../../constants/index'
import { removeApples, removeBananas, removePapayas } from '../../redux/actions'
import FruitOrder from '../../Components/FruitOrder'



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
                    <NavLink className='main_order_link' to='/'>Main</NavLink>
            </div>
            <div className='span_order'>
                <span>YOUR ORDER</span>
            </div>
            <div className='ordered'>
                <FruitOrder onRemove={removeBanana} kilo={bananas.kilo } sum={bananas.sum} title='Banana'/>
                <FruitOrder onRemove={removeApple} kilo={apples.kilo} sum={apples.sum} title='Apple' />
                <FruitOrder onRemove={removePapaya} kilo={papayas.kilo} sum={papayas.sum} title='Papaya' />
                <div>
                    <span><strong>The Final Price: {totalPrice()}</strong></span>
                </div>
            </div>
        </div>
    )
}
