import React from 'react';
import { useItems } from '../../context/ItemContext';

export default function Header() {
  const { itemList } = useItems();
  console.log('itemsList', itemList);

  return (
    <header>
      <h1>Shopping List</h1>
      <div>you have {itemList.length} items in you shopping cart</div>
    </header>
  );
}
