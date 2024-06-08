export default function Footer({ items }) {
  if (items.length === 0) return 
  <footer className="text-center text-light pt-3">
    Kamu beli memiliki daftar belanjaan, yuk isi dulu 🤗
  </footer>;

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;

  return (
    <div className="row justify-content-center pt-2 mb-3">
      <div className="col-md-6">
        <footer className="card bg-body-tertiary">
          <div className="card-body fs-6">
             Di daftar belanjaan kamu ada <span className="fw-semibold text-primary">{totalItems} barang</span>, <span className="text-success text-capitalize fw-semibold">{checkedItems} barang</span> sudah selesai terbeli.
          </div>
        </footer>
      </div>
    </div>
  );
}
