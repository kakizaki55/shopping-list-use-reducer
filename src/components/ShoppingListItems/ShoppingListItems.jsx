import React from 'react';

export default function ShoppingListItems({ shoppingList, handleDelete }) {
  return (
    <div>
      {shoppingList.map(({ name, id, count, completed }) => (
        <div key={id}>
          <span>count:{count} </span>
          <span>{name} </span>
          <span>
            <input type="checkbox" />
          </span>
          <button onClick={handleDelete}>delete</button>
        </div>
      ))}
    </div>
  );
}
