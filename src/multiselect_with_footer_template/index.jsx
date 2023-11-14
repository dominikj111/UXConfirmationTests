import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import MyMultiSelect from "./MyMultiSelect";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyMultiSelect placeholder="Select an Option" onChange={(value) => console.log(value)}/>
  </StrictMode>
);
