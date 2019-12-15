import { FETCH_DATA_FROM_BACKEND } from '../actions/types';

const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_FROM_BACKEND:
            console.log("Load for me");
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
