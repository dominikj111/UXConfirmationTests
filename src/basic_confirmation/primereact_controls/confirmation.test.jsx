import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";
import Dropdown from "./Dropdown";
import MultiSelect from "./Multiselect";

describe("These tests test user events upon Primereact controls", () => {
  it("Renders text after click on a Button", () => {
    render(<Button />);
    expect(screen.queryByText("Button Text")).toBeNull();
    fireEvent.click(screen.queryByText("Button"));
    expect(screen.queryByText("Button Text")).not.toBeNull();
  });

  it("Renders Dropdown panel after click on a placeholder", () => {
    render(<Dropdown />);

    const selectElements = screen.queryAllByText("Select ...");
    expect(selectElements.length).toBe(2);

    // fireEvent.click(selectElements[0]); // click on any works just fine
    fireEvent.click(selectElements[1]);

    expect(screen.queryByText("Yes")).not.toBeNull();
    expect(screen.queryByText("No")).not.toBeNull();
  });

  it("Renders MultiSelect panel after click on a placeholder", () => {
    let onChangeHandler = jest.fn();
    render(<MultiSelect onChange={onChangeHandler} />);

    const selectElement = screen.queryByText("Select ...");
    
    fireEvent.click(selectElement);

    expect(screen.queryByText("Maybe")).not.toBeNull();

    fireEvent.click(screen.queryByText("Yes"));

    expect(onChangeHandler).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.queryByText("Maybe"));

    expect(onChangeHandler).toHaveBeenCalledTimes(2);
    expect(onChangeHandler).toHaveBeenCalledWith([1, 3]);
  });
});