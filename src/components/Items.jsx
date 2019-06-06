import React, { Fragment, Component } from 'react';
import { inject, observer } from 'mobx-react';
import { initItems } from '../services/itemsMock';
import Item from './Item';

class Items extends Component {
  componentDidMount() {
    this.props.store.setItems(initItems);
  }
  render() {
    const { items, add, remove } = this.props.store;
    return (
      <Fragment>
        {items.map(item => (
          <Item key={item.id} {...item} add={add} remove={remove} />
        ))}
      </Fragment>
    );
  }
}

export default inject('store')(observer(Items));
