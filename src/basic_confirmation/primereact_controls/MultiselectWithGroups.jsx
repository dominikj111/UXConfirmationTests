import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";

const options = [
  {
    label: "Group 1",
    items: [
      { label: "Yes", value: 1 },
      { label: "No", value: 2 },
      { label: "Maybe", value: 3 },
    ],
  },
  {
    label: "Group 2",
    items: [
      { label: "Y1", value: 11 },
      { label: "N2", value: 22 },
      { label: "Again Maybe", value: 33 },
    ],
  },
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
        placeholder="Select from group ..."
        optionGroupChildren="items"
        optionLabel="label"
        optionGroupLabel="label"
        maxSelectedLabels={0}
      />
    </div>
  );
}
