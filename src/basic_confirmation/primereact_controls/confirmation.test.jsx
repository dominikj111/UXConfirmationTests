import React from "react";
import { render, screen, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import { configure } from "@testing-library/dom";

import Button from "./Button";
import Dropdown from "./Dropdown";
import MultiSelect from "./Multiselect";
import Checkbox from "./Checkbox";
import Chip from "./Chip";
import MultiselectWithGroups from "./MultiselectWithGroups";
import { debug } from "webpack";

describe("These tests test user events upon Primereact controls", () => {
  it("Renders text after click on a Button", () => {
    render(<Button />);
    expect(screen.queryByText("Button Text")).toBeNull();
    fireEvent.click(screen.queryByText("Button"));
    expect(screen.queryByText("Button Text")).not.toBeNull();
  });

  it("Allows to select button by it's role", () => {
    render(<Button />);
    expect(screen.queryAllByRole("button").length).toBe(1);
  });

  it("Renders Dropdown panel after click on a placeholder", () => {
    render(<Dropdown />);

    const selectElements = screen.queryAllByText("Select one ...");
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

  it("The Checkbox is selectable by it's role", () => {
    render(<Checkbox />);
    expect(screen.queryAllByRole("checkbox").length).toBe(2);
  });

  it("Locates the 'remove' icon of the Chip element", () => {
    render(<Chip />);
    configure({ testIdAttribute: "data-pc-section" });

    expect(screen.queryByText("Chip Removed")).toBeNull();
    expect(screen.queryByTestId("removeicon")).not.toBeNull();

    fireEvent.click(screen.queryByTestId("removeicon"));

    expect(screen.queryByText("Chip Removed")).not.toBeNull();
    expect(screen.queryByTestId("removeicon")).toBeNull();

    configure({ testIdAttribute: "data-testid" });
  });

  it("Allows to select all options in multiselect with groups by the checkbox", () => {
    const onChangeHandler = jest.fn();
    render(<MultiselectWithGroups onChange={onChangeHandler} />);

    fireEvent.click(screen.getByText("Select from group ...")); // click to open the dropdownpanel

    configure({ testIdAttribute: "data-pc-section" });
    fireEvent.click(screen.queryByTestId("hiddeninput")); // click on "Select All" checkbox
    configure({ testIdAttribute: "data-testid" });

    expect(onChangeHandler).toHaveBeenCalledWith([1, 2, 3, 11, 22, 33]);
  });

  it("Allows to open and close the dropdown panel of the multiselect with groups", async () => {
    const onChangeHandler = jest.fn();
    render(<MultiselectWithGroups onChange={onChangeHandler} />);

    expect(screen.queryByText("Yes")).toBeNull();
    fireEvent.click(screen.getByText("Select from group ...")); // click to open the dropdownpanel
    expect(screen.queryByText("Yes")).not.toBeNull();

    fireEvent.click(screen.getByText("No")); // select an option

    fireEvent.click(screen.getByText("1 items selected")); // click to close the dropdownpanel

    await waitForElementToBeRemoved(() => screen.queryByText("Yes"));

    expect(screen.queryByText("Yes")).toBeNull();
    expect(screen.queryByText("No")).toBeNull();
  });

  it("Allows to open and close the dropdown panel of the dropdown", async () => {
    render(<Dropdown />);
    const dropdownElement = screen.getAllByText("Select one ...")[1];
    const someParagraphElement = screen.getByText("Some other element");

    expect(screen.queryByText("Yes")).toBeNull();
    fireEvent.click(dropdownElement); // click to open the dropdownpanel
    expect(screen.queryByText("Yes")).not.toBeNull();

    fireEvent.click(dropdownElement); // click to close the dropdownpanel

    await waitForElementToBeRemoved(() => screen.queryByText("Yes"));
    expect(screen.queryByText("Yes")).toBeNull();
  });
});
