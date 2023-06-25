import axios from "axios";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((e) => console.log(JSON.stringify(e)));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
