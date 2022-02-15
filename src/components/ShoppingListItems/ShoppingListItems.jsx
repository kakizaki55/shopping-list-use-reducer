import React from 'react';
import { useState } from 'react';

export default function ShoppingListItems({ shoppingList, handleDelete }) {
  return (
    <div>
      {shoppingList.map(({ name, id, count, completed, isEditing }) => (
        <div key={id}>
          <span>count:{count} </span>
          <span>{name} </span>
          <span>
            <input type="checkbox" />
          </span>
          <button
            value={id}
            onClick={(e) => {
              handleDelete(e.target.value);
            }}
          >
            delete
          </button>

          <button value={id} onClick={() => (isEditing = true)}>
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
