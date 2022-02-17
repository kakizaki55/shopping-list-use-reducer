import ShoppingList from './views/ShoppingList/ShoppingList';
import Header from './views/Header/Header';
import style from './App.css';

export default function App() {
  return (
    <div className={style.app}>
      <Header />
      <ShoppingList />
    </div>
  );
}
