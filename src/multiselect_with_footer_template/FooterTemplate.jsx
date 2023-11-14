import React from "react";
import { Button } from "primereact/button";

export default function FooterTemplate({ onCancel, onSave }) {
  return (
    <>
      <Button label="Cancel" icon="pi pi-times" onClick={onCancel} />
      <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </>
  );
}
