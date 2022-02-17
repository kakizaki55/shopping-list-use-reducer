import React from 'react';
import { useItems } from '../../context/ItemContext';

export default function Header() {
  const test = useItems();
  console.log(test);
  return <div>Shopping List</div>;
}
