export const ADD_BANANAS_TO_ORDER = 'ADD_BANANAS_TO_ORDER'
export const ADD_APPLES_TO_ORDER = 'ADD_APPLES_TO_ORDER'
export const ADD_PAPAYAS_TO_ORDER = 'ADD_PAPAYAS_TO_ORDER'
export const REMOVE_BANANAS_FROM_ORDER = 'REMOVE_BANANAS_FROM_ORDER'
export const REMOVE_APPLES_FROM_ORDER = 'REMOVE_APPLES_FROM_ORDER'
export const REMOVE_PAPAYAS_FROM_ORDER = 'REMOVE_PAPAYAS_FROM_ORDER'

export const addBananas = (price) => ({
    type: ADD_BANANAS_TO_ORDER,
    payload : price,
})
export const addApples = (price) => ({
    type: ADD_APPLES_TO_ORDER,
    payload: price,
})
export const addPapayas = (price) => ({
    type: ADD_PAPAYAS_TO_ORDER,
    payload: price,
})

export const removeBananas = (price) => ({
    type: REMOVE_BANANAS_FROM_ORDER,
    payload: price,
})
export const removeApples = (price) => ({
    type: REMOVE_APPLES_FROM_ORDER,
    payload: price,
})
export const removePapayas = (price) => ({
    type: REMOVE_PAPAYAS_FROM_ORDER, 
    payload: price,
})
