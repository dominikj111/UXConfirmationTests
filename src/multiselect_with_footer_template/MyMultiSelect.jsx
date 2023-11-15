import React, { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import FooterTemplate from "./FooterTemplate";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
  { label: "Option 8", value: 8 },
  { label: "Option 9", value: 9 },
  { label: "Option 10", value: 10 },
];

export default function App({ onChange, placeholder }) {
  const [value, setValue] = useState([]);

  return (
    <MultiSelect
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(e) => setValue(e.value)}
      panelFooterTemplate={
        <FooterTemplate
          onSave={() => onChange(value)}
          onCancel={() => onChange([])}
        />
      }
    />
  );
}
