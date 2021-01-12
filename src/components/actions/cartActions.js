import React from 'react';

export const addToCart = (id) => {
  return { 
      type: ADD_TO_CART, 
      id 
    };
};
