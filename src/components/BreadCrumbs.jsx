import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className=" rounded-md flex justify-evenly  overflow-hidden">
        {items.map((item, index) => (
          <Link to={item.url} key={index}>
            <li key={index} className="flex items-center">
              <span className="text-gray-500">{item.name}</span>
              {index !== items.length - 1 && (
                <svg
                  className="h-5 w-auto text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </li>
          </Link>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
