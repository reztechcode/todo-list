export default function Item({ item, onDeleteItem, onToggleItem, onEditItem }) {
  return (
    <li className="list-group-item" key={item.id}>
      <div className="row justify-content-center">
        <div className="col-2">
          <input id={item.id} type="checkbox" className="form-check-input" checked={item.checked} onChange={() => onToggleItem(item.id, item)} />
        </div>
        <div className="col-7">
          <label htmlFor={item.id} style={item.checked ? { textDecoration: 'line-through' } : {}}>
            {item.quantity} {item.name}
          </label>
        </div>
        <div className="col-2">
          <button className="btn btn-delete" onClick={() => onDeleteItem(item.id, item)}>
            <i className='bx bx-trash icon'></i>
          </button>
          <button className="btn btn-delete" onClick={() => onEditItem(item)}>
            <i className='bx bx-edit-alt'></i>
          </button>
        </div>
      </div>
    </li>
  );
}
