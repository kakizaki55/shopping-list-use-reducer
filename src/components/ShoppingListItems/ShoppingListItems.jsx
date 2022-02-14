import React from 'react';

export default function ShoppingListItems({ shoppingList }) {
  console.log({ shoppingList });
  return (
    <div>
      {shoppingList.map(({ name, id, count, completed }) => (
        <div key={id}>
          <span>count:{count} </span>
          <span>{name} </span>
          <span>
            <input type="checkbox" checked={completed} />
          </span>
        </div>
      ))}
    </div>
  );
}
