import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h3>{name}</h3>

          <p className="tour-description">
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'show more'}
            </button>
          </p>

          <button className="tour-delete" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </div>

    </article>
  );
};

export default Tour;