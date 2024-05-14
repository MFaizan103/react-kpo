import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const CheckBox = () => {
  const options = [
    { label: "Option 1", value: " Mental Health Issues" },
    { label: "Option 2", value: "Blind" },
    { label: "Option 3", value: "Deaf" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default CheckBox;
