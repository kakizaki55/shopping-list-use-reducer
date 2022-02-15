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
    completed: false,
  },
  {
    id: 3,
    name: 'poki',
    count: 1,
    completed: false,
  },
];

const itemReducer = (state, { type, name, count, id }) => {
  switch (type) {
    case 'add':
      return [...state, { name, count, id, completed: false }];
      break;
    default:
      throw new Error(`type ${type} is not a valid type`);
  }
};

export default function ShoppingList() {
  const [itemList, dispatch] = useReducer(itemReducer, initialShoppingList);

  const addNewItem = (name, count) => {
    dispatch({
      type: 'add',
      name,
      count,
      id: itemList.length + 1,
    });
  };
  const handleDelete = () => {
    dispatch({
      type: 'delete',
    });
  };
  return (
    <div className={style.shoppingListView}>
      <h1>Shopping list</h1>
      <AddItemForm addNewItem={addNewItem} />
      <ShoppingListItems shoppingList={itemList} handleDelete={handleDelete} />
    </div>
  );
}
