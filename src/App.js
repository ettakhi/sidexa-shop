import React, { Fragment } from 'react';
import Items from './components/Items';
import Header from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Items />
      </div>
    </Fragment>
  );
};

export default App;
