import React from "react";
import Layout from "../../components/Layout/Layout";
import OrderCard from "../../components/OrderCard/OrderCard";
import useShoppingCard from "../../hooks/useShoppingCard";

export default function MyOrder() {
  const {orderProducts} = useShoppingCard();
  console.log(orderProducts?.slice(-1)[0].products);
  return (
    <Layout>
      MyOrder
      <div className="flex flex-col w-80">
        {orderProducts?.slice(-1)[0].products.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.images[0]}
            price={item.price}
          />
        ))}
      </div>
    </Layout>
  );
}
