import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import MyMultiSelect from "./MyMultiSelect";

describe("These tests cover MyMultiSelect expanding dropdown panel", () => {
  let onChangeValue;

  beforeEach(() => {
    onChangeValue = jest.fn();
    render(
      <MyMultiSelect placeholder="Select an Option" onChange={onChangeValue} />
    );
  });

  it("Has available options and footer buttons after click on the placeholder", () => {
    expect(screen.queryByText(/save/i)).toBeNull();
    expect(screen.queryByText(/cancel/i)).toBeNull();
    expect(screen.queryByText(/option 5/i)).toBeNull();

    fireEvent.click(screen.queryByText(/select an option/i));

    expect(screen.queryByText(/save/i)).not.toBeNull();
    expect(screen.queryByText(/cancel/i)).not.toBeNull();
    expect(screen.queryByText(/option 5/i)).not.toBeNull();
  });
});

describe("These tests cover MyMultiSelect with expanded dropdown panel", () => {
  let onChangeValue;

  beforeEach(() => {
    onChangeValue = jest.fn();
    render(
      <MyMultiSelect placeholder="Select an Option" onChange={onChangeValue} />
    );
    fireEvent.click(screen.queryByText(/select an option/i));
  });

  it("Should not call onChange yet", () => {
    expect(onChangeValue).not.toHaveBeenCalled();
  });

  it("Trigger onChange when save or cancel is clicked", () => {
    fireEvent.click(screen.queryByText(/option 5/i));
    fireEvent.click(screen.queryByText(/option 4/i));
    fireEvent.click(screen.queryByText(/option 3/i));

    fireEvent.click(screen.queryByText(/save/i));
    
    fireEvent.click(screen.queryByText(/cancel/i));

    expect(onChangeValue).toHaveBeenCalledWith([]);
  });
});
