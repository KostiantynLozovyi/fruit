import React, { useState } from 'react'
import './styles.css'
import banana_img from '../../images/Banana_img.jpg'
import apple_img from '../../images/Apple_img.jpg'
import papaya_img from '../../images/Papaya_img.jpg'
import { Link } from 'react-router-dom'
import { APPLE_PRICE, BANANA_PRICE, PAPAYA_PRICE } from '../../constants'
import { useDispatch, useSelector, } from 'react-redux'
import { addApples, addBananas, addPapayas } from '../../redux/actions'


import { IconButton, Snackbar,  } from '@mui/material'
import Button from '@restart/ui/esm/Button'



export default function MainScreen() {
    const [show, setShow] = useState(false);
    const [showFruit, setShowFruit] = useState(false);

    const dispatch = useDispatch();

    const { bananas, apples, papayas } = useSelector(state => state.fruits)


    const addBanana = () => {
        dispatch(addBananas(bananas.sum + BANANA_PRICE))
    }

    const addApple = () => {
        dispatch(addApples(apples.sum + APPLE_PRICE))
    }

    function nextPrice(kilo) {
        if (!kilo) { return PAPAYA_PRICE };

        return !((kilo + 1) % 3) ? PAPAYA_PRICE / 2 : PAPAYA_PRICE;
    }

    const addPapaya = () => {
        
        // console.log(0 % 3)
        // console.log(papayas.kilo % 3 === 0)
        const summa = papayas.sum + nextPrice(papayas.kilo)

        // if (papayas.kilo < 0) {
        //     dispatch(addPapayas(papayas.sum + PAPAYA_PRICE))
        // } else {
        dispatch(addPapayas(
                summa
            ))
        // }
        // if (papayas.kilo >= 0) {
        //     if (papayas.kilo <= 0) {
        //         dispatch(addPapayas(papayas.sum + PAPAYA_PRICE))
        //     } else {
        //         dispatch(addPapayas(
        //             papayas.sum + (!(papayas.kilo % 3) ? PAPAYA_PRICE / 2 : PAPAYA_PRICE)
        //         ))
        //     }
        // }
    }
    
    


    const handleClickAddBanana = () => {
        setShow(true);
        addBanana();
    };

    const handleClickAddApple = () => {

        setShow(true);
        addApple();
    };

    const handleClickAddPapaya = () => {
        setShow(true);
        addPapaya();
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShow(false);
    };


    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
            </IconButton>
        </React.Fragment>
    );


    return (
        <div>
            <Snackbar
                open={show}
                autoHideDuration={1000}
                onClose={handleClose}
                message={1}
                action={action}
            />
            <div className="link">
                <nav>
                    <Link className="main_order_link" to='/order'>Order</Link>
                </nav>
            </div>
            <div className='all_fruits'>
                <div className='fruit'>
                    <img src={banana_img} className='images' alt='img-banana' />
                    <p>Banana</p>
                    <p>Price:{BANANA_PRICE}$</p>
                    <div>
                        <button
                            onClick={handleClickAddBanana}
                        >Add to Order</button>
                        
                    </div>
                    
                    
                </div>
                <div className='fruit'>
                    <img src={apple_img} className='images' alt='img-apple' />
                    <p>Apple</p>
                    <p>Price:{APPLE_PRICE}$</p>
                    <button
                        onClick={handleClickAddApple}
                    >Add to Order</button>
                </div>
                <div className='fruit'>
                    <img src={papaya_img} className='images' alt='img-papaya' />
                    <p>Papaya</p>
                    <p>Price:{PAPAYA_PRICE}$</p>
                    <button
                        onClick={handleClickAddPapaya}
                    >Add to Order
                    </button>
                </div>
            </div>
            {/* <OverlayTrigger
                        placement='right'
                            overlay={
                                <Tooltip id={`tooltip-${'right'}`}>
                                    Tooltip on <strong>{'right'}</strong>.
                                </Tooltip>
                            }
                        >
                    <button onClick={() => setShowA(true)}>lox

                        </button>
                        </OverlayTrigger>
                <Toast show={showA} onClose={() => setShowA(false)} delay={1000} autohide >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast> */}
        </div>
    )
}
