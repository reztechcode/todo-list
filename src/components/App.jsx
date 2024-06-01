import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './ItemList';
import Footer from './Footer';
import Copyright from './Copyright';

const groceryItems = [
  {
    id: 1,
    name: 'Bayam',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Tahu',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Tempe',
    quantity: 1,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app container-fluid d-flex flex-column min-vh-100">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
      <Copyright />
    </div>
  );
}
