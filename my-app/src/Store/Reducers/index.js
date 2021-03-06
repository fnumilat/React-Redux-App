import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS} from '../Actions';

const initialState = {
    quoteText: "",
    quoteAuthor: "",
    isFetching: false,
    error: ""
};

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCHING_QUOTE_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_QUOTE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                quoteText: action.payload.quoteText,
                quoteAuthor: action.payload.quoteAuthor
            };
        default:
            return state;
    };

};