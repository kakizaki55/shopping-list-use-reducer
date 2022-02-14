import React from 'react';

export default function AddItemForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inside handle submit');
  };
  return (
    <div>
      <form>
        <input type="text"></input>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          add Item
        </button>
      </form>
    </div>
  );
}
