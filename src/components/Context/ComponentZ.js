import React from 'react';
import { priceContext, itemContext } from '../../App';

function ComponentZ() {
  return (
    <div>
      <priceContext.Consumer >
        {
            price => {
                return (
                    <itemContext.Consumer>
                        {
                            item => {
                                return (
                                    <div>
                                        Your item {item} cost is {price}
                                    </div>
                                )
                            }
                        }
                    </itemContext.Consumer>
                )
            }
        }
      </priceContext.Consumer>
    </div>
  );
}

export default ComponentZ;