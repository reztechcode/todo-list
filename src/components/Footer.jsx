export default function Footer({ items }) {
  if (items.length === 0) return <footer className="stats">Daftar belanjaan masih kosong!</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  // const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <div className="row justify-content-center pt-2 mb-3">
      <div className="col-md-6">
        <footer className="card">
          <div className="card-body fs-6">
            Ada <span className="fw-semibold">{totalItems}</span> barang di daftar belanjaan, {checkedItems} barang sudah selesai terbeli.
          </div>
        </footer>
      </div>
    </div>
    // <footer class="navbar bg-body-tertiary mt-auto">
    //   <div class="container">
    //     <a class="navbar-brand" href="#">Navbar</a>
    //   </div>
    // </footer>
  );
}
