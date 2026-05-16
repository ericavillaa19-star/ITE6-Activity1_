function MenuItem({ item }) {
  return (
    <div className="menu-card">
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Price: ₱{item.price}</p>
    </div>
  );
}

export default MenuItem;