import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function () {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Checkbox checked={checked} onChange={(e) => setChecked(e.checked)} />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        role="checkbox"
      />
    </div>
  );
}
