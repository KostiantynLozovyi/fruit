import { PAPAYA_PRICE } from "../constants";
import * as actions from "../redux/actions";

export const order = {
    bananas: {
        kilo: 0,
        sum: 0,
    },
    apples: {
        kilo: 0,
        sum: 0,
    },
    papayas: {
        kilo: 0,
        sum: 0,
    },
}

function nextPrice(kilo) {
    console.log(kilo)
    if (!kilo) { return PAPAYA_PRICE };

    return !(kilo % 3) ? PAPAYA_PRICE / 2 : PAPAYA_PRICE;

};

export default function fruitsReducer(state = order, { type, payload }) {

    switch (type) {

        case actions.ADD_BANANAS_TO_ORDER:
            return { ...state, bananas: { ...state.bananas, kilo: state.bananas.kilo + 1, sum: payload } }
        case actions.ADD_APPLES_TO_ORDER:
            return { ...state, apples: { ...state.apples, kilo: state.apples.kilo + 1, sum: payload } }
        case actions.ADD_PAPAYAS_TO_ORDER:
            return {
                ...state, papayas: {
                    ...state.papayas, kilo: state.papayas.kilo + 1,
                    //добавляю + 1 потому что пред значение является не добавленным (срабатывает перед записью в state)
                    sum: state.papayas.sum + nextPrice(state.papayas.kilo + 1)
                }
            }
        case actions.REMOVE_BANANAS_FROM_ORDER:
            return { ...state, bananas: { ...state.bananas, kilo: state.bananas.kilo - 1, sum: payload } }
        case actions.REMOVE_APPLES_FROM_ORDER:
            return { ...state, apples: { ...state.apples, kilo: state.apples.kilo - 1, sum: payload } }
        case actions.REMOVE_PAPAYAS_FROM_ORDER:
            return {
                ...state, papayas: {
                    ...state.papayas, kilo: state.papayas.kilo - 1,
                    sum: state.papayas.sum - nextPrice(state.papayas.kilo)
                }
            }

        default:
            return state
    }
}
