import React, { useState } from 'react';
import quotes from '../quotes.json';
import colors from '../colors.json';

const QuoteBox = () => {
  //console.log( quotes );
  //console.log( colors );

  //const colors = [
  //  "#845EC2",
  //  "#D65DB1",
  //  "#FF6F91",
  //  "#FF9671",
  //  "#FFC75F",
  //  "#F9F871"
  //];

  const randomQuote = Math.floor( Math.random() * quotes.length );
  const randomColor = Math.floor( Math.random() * colors.length );

  const [indexQuote, setIndexQuote] = useState(randomQuote);
  
  const changeQuote = () => {
    const newRandomQuote = Math.floor(Math.random() * quotes.length);
    setIndexQuote(newRandomQuote);
  };

  document.body.style = `background: ${colors[randomColor].hex}`;

return (

  <div className="quote-box" style={{ color: colors[randomColor].hex }}>
    <div className="quote-box-1">
      <h1 className="h1-autoresize">
        <i className='bx bxs-quote-left'></i>
      </h1>
      <h2 className='h2-autoresize'> {quotes[randomQuote].quote} </h2>
    </div>
    <div className="quote-box-2">
      <h3 className='h3-autoresize'>
        {quotes[randomQuote].author}
      </h3>
      <button className='button-change' onClick={ changeQuote } style={{ backgroundColor: colors[randomColor].hex }}>»</button>
    </div>
  </div>

);
};

export default QuoteBox;