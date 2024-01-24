import { useContext } from "react";
import { ProductsContext } from "@/contexts/productContext";

export default function CartCount() {
  const { selectedProducts } = useContext(ProductsContext);
  return (
    <span className="text-lg font-semibold">{selectedProducts.length}</span>
  );
}
