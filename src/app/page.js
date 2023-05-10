import Image from "next/image";
import Card from "@/components/Card";
// get meta data
export const metadata = {
  title: "JESS - Home",
  description: "This is description",
};

export async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=10&offset=1"
  );
  const data = await res.json();
  return data;
}
export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 text-3xl">
      <h1>Homepage</h1>
      <div className="pt-10 flex flex-wrap justify-between">
      {products.map((product) => (
        <>
          <Card key={product.id} product={product}/>
        </>
      ))}
      </div>
      
    </main>
  );
}
