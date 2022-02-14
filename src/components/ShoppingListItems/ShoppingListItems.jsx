import React from 'react';

export default function ShoppingListItems({ shoppingList }) {
  console.log({ shoppingList });
  return (
    <div>
      {shoppingList.map(({ name, id, count, completed }) => (
        <div key={id}>
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
