import React, { useState } from 'react';
import style from './AddItemForm.css';

export default function AddItemForm({ addNewItem }) {
  const [itemName, setItemName] = useState('');
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(itemName, count);
    setCount(0);
    setItemName('');
  };
  return (
    <div>
      <form
        className={style.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Item:
          <input
            className={style.name}
            type="text"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
        </label>
        <label>
          How Many?
          <input
            className={style.count}
            type="number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
        </label>
        <button>add Item</button>
      </form>
    </div>
  );
}
