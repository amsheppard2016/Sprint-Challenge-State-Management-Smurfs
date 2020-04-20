import {
    FETCH_DATA,
    DATA_FETCH_SUCCESS,
    DATA_FETCH_ERROR,
    // POST_DATA,
    // DATA_POST_SUCCESS,
    // DATA_POST_ERROR,
} from "../actions";

const initialState = {
    smurfs: [],
    isLoading: false,
    error: "",
};

export const smurfReducer = (state = initialState, action) => {
    console.log("reducer:state:actions", state, action);
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: "",
            };
        case DATA_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        // case POST_DATA:
        //     return {
        //         state,
        //     };
        // case DATA_POST_SUCCESS:
        //     return {
        //         state,
        //     };
        // case DATA_POST_ERROR:
        //     return {
        //         state,
        //     };
        default:
            return state;
    }
};
