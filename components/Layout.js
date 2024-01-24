import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="p-6 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
