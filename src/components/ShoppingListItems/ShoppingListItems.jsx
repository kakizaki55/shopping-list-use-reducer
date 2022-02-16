import React from 'react';
import { useState } from 'react';
import style from './ShoppingListItems.css';

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

  return (
    <ol className={style.itemList}>
      {shoppingList.map(({ name, id, count, completed, isEditing }) =>
        isEditing ? (
          <li key={id}>
            <form
              className={style.item}
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
                placeholder={count}
                onChange={(e) => {
                  setCountEdit(e.target.value);
                }}
              />
              <button data-testid={`save-${id}`}>save</button>
            </form>
          </li>
        ) : (
          <li className={style.item} key={id}>
            <span>
              <input type="checkbox" />
            </span>
            <span>{count} </span>
            <span>{name} </span>
            <button
              data-testid={`del-${id}`}
              value={id}
              onClick={(e) => {
                handleDelete(e.target.value);
              }}
            >
              delete
            </button>
            {/* this is the edit button */}
            <button
              data-testid={`edit-${id}`}
              value={id}
              onClick={(e) => {
                handleEdit(e.target.value);
              }}
            >
              edit
            </button>
          </li>
        )
      )}
    </ol>
  );
}
