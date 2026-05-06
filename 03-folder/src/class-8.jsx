import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AxiosCleanUp = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByPrice = async (event) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/?price=${event.target.value}`
      );

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 m-20">
        <h1>E-commerce Application</h1>

        {/* filters */}
        <div>
          <input
            type="text"
            placeholder="Enter Price to Filter 100..."
            className="border border-black px-4 py-1 rounded-lg"
            onChange={filterByPrice}
          />
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 1 ? (
            products.map((product) => (
              <div
                className="border p-4 rounded-lg shadow-md"
                key={product.id}
              >
                <img
                  src={product.images[1]}
                  alt="image-product"
                  className="w-32 h-32 object-cover rounded-lg mx-auto"
                />

                <h1>Title: {product.title}</h1>
                <h2>Price: ₹{product.price}</h2>
                <p>Category: {product.category.name}</p>
              </div>
            ))
          ) : (
            <h1 className="text-red-600">No Products Available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AxiosCleanUp;