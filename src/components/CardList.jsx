import React from "react";
import Card from "./Card";

const CardList = ({ data, heading }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl text-white font-medium py-8">
        {heading}
      </h1>
      <div className="flex flex-wrap gap-8 max-w-3xl items-center justify-center mx-auto">
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
