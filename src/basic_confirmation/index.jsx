import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import StylesImport from "./styles_import";

import PRButton from "./primereact_controls/Button";
import PRDropdown from "./primereact_controls/Dropdown";
import PRMultiSelect from "./primereact_controls/Multiselect";
import PRCheckbox from "./primereact_controls/Checkbox";
import PRChip from "./primereact_controls/Chip";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StylesImport />
    <PRButton />
    <PRDropdown />
    <PRMultiSelect onChange={(value) => console.log(value)} />
    <PRCheckbox />
    <PRChip />
  </StrictMode>
);
