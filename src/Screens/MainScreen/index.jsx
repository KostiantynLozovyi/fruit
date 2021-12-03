import React, { useState } from 'react'
import './styles.css'
import banana_img from '../../images/Banana_img.jpg'
import apple_img from '../../images/Apple_img.jpg'
import papaya_img from '../../images/Papaya_img.jpg'
import { NavLink } from 'react-router-dom'
import { APPLE_PRICE, BANANA_PRICE, PAPAYA_PRICE } from '../../constants'
import { useDispatch, useSelector, } from 'react-redux'
import { addApples, addBananas, addPapayas } from '../../redux/actions'


import { IconButton, Snackbar, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FruitCard from '../../Components/FruitCard'

export default function MainScreen() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const { bananas, apples, papayas } = useSelector(state => state.fruits)

    const handleClickAddBanana = () => {
        setShow(true);
        dispatch(addBananas(bananas.sum + BANANA_PRICE))
        setMessage('Banana')
    };

    const handleClickAddApple = () => {
        setShow(true);
        dispatch(addApples(apples.sum + APPLE_PRICE))
        setMessage('Apple')
    };

    const handleClickAddPapaya = () => {
        setShow(true);
        dispatch(addPapayas())
        setMessage('Papaya')
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShow(false);
    };


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <div>
            <Snackbar
                open={show}
                autoHideDuration={1000}
                onClose={handleClose}
                message={`Add 1 kilo ${message}`}
                action={action}
            />
            <div className="link">
                    <NavLink className="main_order_link" to='/order'>Order</NavLink>
            </div>
            <div className='all_fruits'>
                <FruitCard img={banana_img} onClick={handleClickAddBanana} price={BANANA_PRICE} title='Banana'/>
                <FruitCard img={apple_img} onClick={handleClickAddApple} price={APPLE_PRICE} title='Apple'/>
                <FruitCard img={papaya_img} onClick={handleClickAddPapaya} price={PAPAYA_PRICE} title='Papaya' sale/>
            </div>
        </div>
    )
}
