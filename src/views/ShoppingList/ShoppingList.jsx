import React, { useReducer } from 'react';
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
    completed: true,
  },
  {
    id: 3,
    name: 'poki',
    count: 1,
    completed: false,
  },
];

export default function ShoppingList() {
  const [itemList, dispatch] = useReducer(itemReducer, initialShoppingList);
  const itemReducer = () => {};

  const handleAddNewItem = (newItem) => {
    console.log('inside add new item');
  };

  return (
    <div className={style.shoppingListView}>
      <h1>Shopping list</h1>
      <AddItemForm addNewItem={handleAddNewItem} />
      <ShoppingListItems shoppingList={initialShoppingList} />
    </div>
  );
}
