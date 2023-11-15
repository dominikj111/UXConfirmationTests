import React, { useState } from "react";
import { Chip } from "primereact/chip";

export default function () {
  const [chipRemoved, setChipRemoved] = useState(false);

  return (
    <div>
      <Chip
        label="Chip Label"
        removable
        onRemove={() => setChipRemoved(true)}
      />
      {chipRemoved ? <p>Chip Removed</p> : null}
    </div>
  );
}
