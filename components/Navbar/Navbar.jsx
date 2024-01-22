export default function Navbar() {
  const menuStyle = "text-lg font-bold";

  return (
    <nav>
      <header className="flex items-center justify-between p-4">
        <div className="text-3xl font-bold text-purple-200">E-SHOP</div>
        <div className="flex gap-3">
          <div className={menuStyle}>About</div>
          <div className={menuStyle}>Shop</div>
          <div className={menuStyle}>Cart</div>
          <div className={menuStyle}>Account</div>
        </div>
      </header>
    </nav>
  );
}
