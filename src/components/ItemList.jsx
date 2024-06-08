import Item from './Item';

export default function List({ items, onDeleteItem, onToggleItem, onClearItems, onEditItem }) {
  if (items.length != 0) {
    return (
      <>
        <div className="row justify-content-center pt-3">
          <div className="col-md-8">
            <ul className='list-group list-grup-border'>
              {items.map((item, index) => (
                <Item item={item} key={index} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onEditItem={onEditItem} />
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-12 text-center pt-2">
          <button className='btn btn-sm btn-danger' onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }
}
