import React, { useState } from 'react';

export default function AddItemForm({ addNewItem }) {
  const [itemName, setItemName] = useState('');
  const [count, setCount] = useState(0);
  console.log(itemName, count);
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem();
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
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />
        <input
          type="number"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button>add Item</button>
      </form>
    </div>
  );
}
