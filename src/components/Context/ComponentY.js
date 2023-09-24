import React, { useContext } from 'react';
import ComponentZ from './ComponentZ';
import { priceContext, itemContext } from '../../App';

function ComponentY() {
  const price = useContext(priceContext);
  const item = useContext(itemContext);
  return (
    <div>
      Product {item} is price: {price}
    </div>
  );
}

export default ComponentY;