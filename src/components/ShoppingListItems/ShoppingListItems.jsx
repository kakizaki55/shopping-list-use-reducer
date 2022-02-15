import React from 'react';
import { useState } from 'react';

export default function ShoppingListItems({
  shoppingList,
  handleDelete,
  handleEdit,
  handleSaveEdit,
}) {
  const [nameEdit, setNameEdit] = useState();
  const [countEdit, setCountEdit] = useState();

  const handleSave = (e, id) => {
    e.preventDefault();
    handleSaveEdit(nameEdit, countEdit, id);
  };
  console.log(shoppingList);
  return (
    <div>
      {shoppingList.map(({ name, id, count, completed, isEditing }) =>
        isEditing ? (
          <div key={id}>
            <form
              onSubmit={(e) => {
                handleSave(e, id);
              }}
            >
              <input
                type="text"
                placeholder={name}
                onChange={(e) => {
                  setNameEdit(e.target.value);
                }}
              />
              <input
                type="number"
                value={countEdit}
                placeholder={count}
                onChange={(e) => {
                  setCountEdit(e.target.value);
                }}
              />
              <button>save</button>
            </form>
          </div>
        ) : (
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
        )
      )}
    </div>
  );
}
