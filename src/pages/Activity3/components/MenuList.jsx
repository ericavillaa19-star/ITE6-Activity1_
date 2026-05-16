import MenuItem from "./MenuItem";

function MenuList({ menu }) {
  return (
    <div className="menu-list">
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;