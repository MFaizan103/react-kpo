import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ text, detail }) => {
  return (
    <Link>
      <div className="w-72 min-h-64 flex flex-col p-4 justify-between rounded-lg drop-shadow-lg bg-white my-5  ">
        <div className="flex flex-col justify-evenly gap-5">
          <p className="font-semibold text-xl  ">{text}</p>
          <p className="font-normal text-sm ">{detail}</p>
        </div>

        <Link className="px-8 py-4 flex items-center justify-center rounded-lg hover:bg-red-600 bg-slate-900 text-white shadow-xl">
          Apply
        </Link>
      </div>
    </Link>
  );
};

export default JobCard;
