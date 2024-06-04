import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function Modal({ openModal, data, onUpdate, close }) {
    const [name, setName] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name)
        if (!name) {
          toast.warning("Sepertinya kamu belum melakukan perubahan apapun 🤔", {
            position: "top-center"
          });
          return
        };
        const newItem = { name, checked: false, id: data.id };
        onUpdate(newItem);
        setName('');
    }
    if (openModal) {
        return (
            <div className="modal-container min-vh-100">
                <div className="card modal-box">
                    <h4 className='p-2 text-primary'>Edit Data - <span className='fst-italic'>{data.name}</span></h4>
                    <form className='add-form' onSubmit={handleSubmit}>
                        <div className="row justify-content-center p-0 g-2">
                            <div className="col-md-12 col-lg-6">
                                <input type="text" className='form-control' defaultValue={data.name}  onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-auto p-0">
                                <button className='btn btn-submit'>Perbarui</button>
                            </div>
                        </div>
                    </form>
                    <a href="#" className='link-danger pt-3 fs-6' onClick={close}>Close</a>
                </div>
            </div>
        );
    }
}

