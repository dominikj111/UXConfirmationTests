import React, { useState } from "react";
import { Button } from "primereact/button";

export default function () {
  const [renderText, setRenderText] = useState(false);

  return (
    <div>
      {renderText ? <p>Button Text</p> : null}
      <Button label="Button" onClick={() => setRenderText(!renderText)} />
    </div>
  );
}
