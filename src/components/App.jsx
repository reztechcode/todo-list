import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './ItemList';
import Footer from './Footer';
import Copyright from './Copyright';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.success("Barang nya berhasil di masukin ke List");
  }

  function handleDeleteItem(id,data) {
    setItems((items) => items.filter((item) => item.id !== id));
    toast.error(data.name+", nya berhasil di hapus");
  }

  function handleEditItem(item) {
    // setItems((items) => items.filter((item) => item.id !== id));
    // toast.error(item.name);
    // console.log(item)
    return
  }
  
  function handleToggleItem(id,data) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
    if (!data.checked) {
      toast.success(data.name+", sudah Selesai di Beli");
    }else{
      toast.warning(data.name+", Gak jadi di Beli kah ?");
    }
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app container-fluid d-flex flex-column min-vh-100">
      <ToastContainer className="fs-6" />
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} onEditItem={handleEditItem} />
      <Footer items={items} />
      <Copyright />
    </div>
  );
}
