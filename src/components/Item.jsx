import React from 'react';

const Item = ({ name, qty, price, add, remove }) => {
  return (
    <div className="row">
      <div className="col-2">
        <span>{name}</span>
      </div>
      <div>
        <button
          className="btn btn-primary - btn-sm m-2"
          onClick={() => add(name)}
        >
          +
        </button>
        <button
          disabled={qty === 0}
          className="btn btn-danger - btn-sm m-2"
          onClick={() => remove(name)}
        >
          -
        </button>
        <span className="badge badge-warning m-2"> {qty}</span>
      </div>
    </div>
  );
};

export default Item;
