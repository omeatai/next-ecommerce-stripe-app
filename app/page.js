"use client";
import { useEffect, useState } from "react";
import Product from "@/components/Product";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products", {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        if (response) {
          const data = await response.json();
          // console.log(data);
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);

  const categoryList = products.map((product) => {
    return product.category;
  });
  const uniqueCategories = [...new Set(categoryList)];

  return (
    <div className="p-6">
      <Navbar />
      <div>
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-purple-500"></div>
          </div>
        )}
      </div>
      <div>
        {uniqueCategories.map((category) => {
          return (
            <div key={category} className="mt-8 ">
              <h2 className="text-2xl font-medium text-gray-600 capitalize text-start">
                {category}
              </h2>
              <div className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-start">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => {
                    return (
                      <div key={product.id} className="mt-4">
                        <Product product={product} />
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
