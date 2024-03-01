import React from 'react';

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>Rs.{props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
