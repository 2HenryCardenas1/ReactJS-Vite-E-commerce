import React, {useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
