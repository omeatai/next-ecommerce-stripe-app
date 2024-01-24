import Menu from "../Menu";

export default function Navbar() {
  return (
    <nav>
      <header className="flex items-center justify-between p-4">
        <div className="text-3xl font-bold text-purple-200">E-SHOP</div>
        <div className="flex gap-3">
          <Menu />
        </div>
      </header>
    </nav>
  );
}
