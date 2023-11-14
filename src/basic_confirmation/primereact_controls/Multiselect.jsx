import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

const options = [
  { label: "Yes", value: 1 },
  { label: "No", value: 2 },
  { label: "Maybe", value: 3 },
];

export default function ({ onChange }) {
  const [value, setValue] = useState();

  useEffect(() => {
    if (value !== undefined) {
      onChange(value);
    }
  }, [value]);

  return (
    <div>
      <MultiSelect
        value={value}
        options={options}
        onChange={(e) => setValue(e.value)}
        placeholder="Select ..."
      />
    </div>
  );
}
