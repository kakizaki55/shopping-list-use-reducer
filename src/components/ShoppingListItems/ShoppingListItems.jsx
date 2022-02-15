import React from 'react';
import { useState } from 'react';

export default function ShoppingListItems({
  shoppingList,
  handleDelete,
  handleEdit,
}) {
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
          {/* this is the edit button */}
          <button
            value={id}
            onClick={(e) => {
              handleEdit(e.target.value);
            }}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}
