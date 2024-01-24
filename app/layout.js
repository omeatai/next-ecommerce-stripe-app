import { Inter } from "next/font/google";
import "./globals.css";
import { ProductsContextProvider } from "@/contexts/productContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EShop",
  description: "Ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductsContextProvider>
        <body className={inter.className}>{children}</body>
      </ProductsContextProvider>
    </html>
  );
}
