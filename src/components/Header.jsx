import React from 'react';
import { observer, inject } from 'mobx-react';

const Header = ({ store: { totalPrice, reset } }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="badge badge-pill badge-secondary">
          Total Price: {totalPrice} ct
        </span>
        <button className="btn btn-danger btn-sm" onClick={reset}>
          Reset Cart
        </button>
      </nav>
    </div>
  );
};

export default inject('store')(observer(Header));
