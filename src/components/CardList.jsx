import React from "react";
import Card from "./Card";

const CardList = ({ data, heading }) => {
  return (
    <div className="max-w-3xl my-8 mx-auto">
      <h1 className="text-center text-2xl text-white font-medium py-8">{heading}</h1>
      <div className="flex gap-8 flex-wrap items-center justify-center ">
        {data.map((item) => (
          <Card
            text={item.title}
            key={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
