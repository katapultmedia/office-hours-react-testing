import React from 'react';

export const Portillos = (props) => {
  const testId = props['data-testid'] ?? 'testing__portillos__content';

  if (!props.results) return null;

  return (
    <div data-testid={`${testId}`}>
      <h1 data-testid={`${testId}__header`}>Portiyos</h1>
      <p data-testid={`${testId}__subheader`}>Lipsum</p>
    </div>
  )
};
