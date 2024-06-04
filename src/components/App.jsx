import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import GroceryList from './ItemList';
import Footer from './Footer';
import Copyright from './Copyright';
import Modal from './Modal'
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
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState([])

  function handleAddItem(item) {
    setItems([...items, item]);
    toast.success("Barang nya berhasil di masukin ke List");
  }

  function handleEditItem(item) {
    const id = item.id
    const newItems = [...items]; // Create a copy
    const itemIndex = newItems.findIndex((item) => item.id === id);
    // console.log(itemIndex)
    if (itemIndex !== -1) {
      const updatedItem = { ...newItems[itemIndex], ...item }; // Merge data
      newItems[itemIndex] = updatedItem; // Replace at index
    }
    setItems(newItems); 
    setShow(false);
  }

  function handleDeleteItem(id,data) {
    setItems((items) => items.filter((items) => items.id !== id));
    toast.error(data.name+", nya berhasil di hapus");
  }

  function showEditItem(item) {
    setEditData({
      id: item.id,
      name: item.name
    })
    setShow(true);
  }
  function closeEditItem(){
    setShow(false);
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
  // console.log(editData)

  return (
    <div className="app container-fluid d-flex flex-column min-vh-100">
      <ToastContainer className="fs-6" />
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} onEditItem={showEditItem} />
      <Footer items={items} />
      <Copyright />
      <Modal openModal={show} data={editData} onUpdate={handleEditItem} close={closeEditItem} />
    </div>
  );
}
