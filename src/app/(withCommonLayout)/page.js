import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  const products = await res.json();

  return (
    <div className="text-center">
      <h1 className="text-5xl mx-auto my-6 font-bold">
        Font Optimizing is Here
      </h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Link href="/products">
        <button className="p-2 bg-blue-500 my-5 cursor-pointer rounded-md">
          See More
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
