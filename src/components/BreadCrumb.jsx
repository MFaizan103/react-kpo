import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const MyComponent = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Category", url: "/category" },
    { name: "Subcategory", url: "/category/subcategory" },
    { name: "Current Page", url: "/category/subcategory/current" },
  ];

  return (
    <div className="container mx-auto">
      <Breadcrumbs items={breadcrumbs} />
      {/* Your main content goes here */}
    </div>
  );
};

export default MyComponent;
