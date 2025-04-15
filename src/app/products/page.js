import ProductCard from "@/components/products/ProductCard";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    // cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="text-center text-4xl my-5">
        Data fetching, caching and revalidating AAVC
      </h1>

      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
