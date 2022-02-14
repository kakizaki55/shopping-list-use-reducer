import React from 'react';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import ShoppingListItems from '../../components/ShoppingListItems/ShoppingListItems';
import style from './ShoppingList.css';

export default function ShoppingList() {
  return (
    <div className={style.shoppingList}>
      <h1>Shopping list</h1>
      <AddItemForm />
      <ShoppingListItems />
    </div>
  );
}
