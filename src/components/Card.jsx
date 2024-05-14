import React from "react";
import { Link } from "react-router-dom";

const Card = ({ text, icon, link }) => {
  return (
    <Link to={link}>
      <div className="w-72 rounded-lg overflow-hidden drop-shadow-lg bg-white transition ease-in-out hover:text-white cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-slate-950 duration-300 ">
        <div className="py-4 flex flex-col items-center justify-center gap-4">
          {icon}
          <p className="font-semibold">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
