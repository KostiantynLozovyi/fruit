import { combineReducers } from 'redux';
import fruitsReducer from '../redux/fruitsReducer';

const rootReducer = combineReducers({
    fruits: fruitsReducer,
});

export default rootReducer;