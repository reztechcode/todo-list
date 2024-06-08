import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      toast.warning("Isi dulu nama barang nya", {
        position: "top-right"
      });
      return
    };
    var id = "id-" + Date.now()
    const newItem = { name, quantity, checked: false, id: id };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h4 className='text-center pb-1 text-white'>Yuk masukin list Belanja hari ini?</h4>
        <form className='add-form' onSubmit={handleSubmit}>
          <div className="row justify-content-center p-0 g-2">
            <div className="col-md-6 col-lg-6">
              <input type="text" className='form-control' placeholder="masukan nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-md-auto">
              <select className='form-select' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {quantityNum}
              </select>
            </div>
            <div className="col-auto p-0"><button className='btn btn-submit'>Tambah</button></div>
          </div>
        </form>
      </div>
    </div>
  );
}