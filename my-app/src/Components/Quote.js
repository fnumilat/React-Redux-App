import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { getQuote } from '../Store/Actions';


const Quote = ({getQuote, quoteText, quoteAuthor, isFetching, error}) => {
    if (isFetching) {
        return <h2 className="Loading-Message">Fetching your quote now...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>
    }

  return (
    <div className="Quote">
      <button className="Button" onClick={getQuote}>Click Here</button>
      <div className="Quote-Box">
        <h2>{quoteText}</h2>
        <h2>{quoteAuthor}</h2>
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
    return{
        quoteText: state.quoteText,
        quoteAuthor: state.quoteAuthor,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStatetoProps, {getQuote})(Quote);
