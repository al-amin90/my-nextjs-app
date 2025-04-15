import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div>
      <div>
        <Image
          width={1500}
          height={800}
          src={product.image}
          alt={product.productName}
          className="rounded-t-lg "
        />
        <h3>{product.productName}</h3>
        <h5>{product.category}</h5>
        <h5>{product.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
