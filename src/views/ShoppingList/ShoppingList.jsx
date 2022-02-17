import React, { useReducer } from 'react';
import AddItemForm from '../../components/AddItemForm/AddItemForm';
import ShoppingListItems from '../../components/ShoppingListItems/ShoppingListItems';
import style from './ShoppingList.css';
import { useItems } from '../../context/ItemContext';

export default function ShoppingList() {
  const { handleDelete, handleEdit, handleSaveEdit, itemList, addNewItem } =
    useItems();

  return (
    <div className={style.shoppingListView}>
      <AddItemForm addNewItem={addNewItem} />
      <ShoppingListItems
        shoppingList={itemList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
}
