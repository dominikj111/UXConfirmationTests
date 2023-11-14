import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const options = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export default function () {
  const [value, setValue] = useState();

  return (
    <div>
      <Dropdown
        value={value}
        options={options}
        onChange={(e) => setValue(e.value)}
        placeholder="Select ..."
      />
    </div>
  );
}
