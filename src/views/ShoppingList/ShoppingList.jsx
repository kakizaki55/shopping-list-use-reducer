import React from 'react';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import ShoppingListItems from '../../components/ShoppingListItems/ShoppingListItems';
import style from './ShoppingList.css';

const initialShoppingList = [
  {
    id: 1,
    name: 'banana',
    count: 3,
    completed: false,
  },
  {
    id: 2,
    name: 'beans',
    count: 500,
    completed: false,
  },
  {
    id: 3,
    name: 'poki',
    count: 1,
    completed: false,
  },
];

export default function ShoppingList() {
  return (
    <div className={style.shoppingListView}>
      <h1>Shopping list</h1>
      <AddItemForm />
      <ShoppingListItems shoppingList={initialShoppingList} />
    </div>
  );
}
