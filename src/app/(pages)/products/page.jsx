import Link from "next/link";

// request
const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

  return data;
};

async function Products() {
  const { products } = await getData();

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/singleProduct/${product.id}`}>
              <h1 className="text-3xl">{product.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
