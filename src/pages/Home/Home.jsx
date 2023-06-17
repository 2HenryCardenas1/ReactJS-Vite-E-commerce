import React from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import useShoppingCard from "../../hooks/useShoppingCard";

export default function Home() {
  const {items, setSearchByTitle} = useShoppingCard();

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-5">
        <h1 className="font-medium text-xl">Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="w-80 border border-black rounded-lg p-2 text-center mb-5 focus:outline-none hover:cursor-pointer"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}
