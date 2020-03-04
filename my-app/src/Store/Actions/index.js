import axios from 'axios';

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAIL = "FETCHING_QUOTE_FAIL";

export const getQuote = () => dispatch => {
    dispatch({type: FETCHING_QUOTE_START});

    axios
        .get("https://quote-garden.herokuapp.com/quotes/random")
        .then(res => {
            console.log("Get Response", res);

            dispatch({type: FETCHING_QUOTE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Get Error", err);

            dispatch({
                type: FETCHING_QUOTE_FAIL,
                payload: `${err.response.message} with response code ${err.response.code}`
            });
        });
};