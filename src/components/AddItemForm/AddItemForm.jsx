import React, { useState } from 'react';

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
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button>add Item</button>
      </form>
    </div>
  );
}
