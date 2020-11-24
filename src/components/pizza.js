import React from 'react';
import { Portillos } from './portillos';

export const Pizza = () => {
  // load data
  const result = [1, 2, 3, 4]
  return (
    <>
      <h1 data-testid='testing__pizza__header'>Pizza</h1>
      <span data-testid='testing__pizza__subheader'>>> Loreadsfasdffdsfsdm ipsum dolor sit amet, thank you.</span>
      <hr />
      <Portillos results={result} data-testid='testing__pizza__content' />
    </>
  )
};
