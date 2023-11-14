import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MyMultiSelect from "./MyMultiSelect";

// describe("These tests cover MyMultiSelect with expanded dropdown panel", () => {
//   let sut;
//   let user;
//   let onChangeValue;

//   beforeEach(async () => {
//     onChangeValue = jest.fn();
//     user = userEvent.setup();

//     sut = render(
//       <MyMultiSelect placeholder="placeholder345" onChange={onChangeValue} />
//     );

//     // await waitFor(async () =>

//     const dropdownLabel = await sut.getByText(/placeholder345/i);

//       console.log(sut.container.querySelector(".p-multiselect"));


//     // await act(async () => {
//       // await fireEvent.click(sut.container.querySelector(".p-multiselect"));
//       await user.click(sut.container.querySelector(".p-multiselect"));
//       // await fireEvent.animationEnd(dropdownLabel)
//     // });

//     console.log(sut.container.outerHTML);

//     // );
//   });

//   // it("Should not call onChange yet", () => {
//   //   expect(onChangeValue).not.toHaveBeenCalled();
//   // });

//   // it("Has available buttons to save and cancel", () => {
//   //   expect(screen.findByText(/save/i)).not.toBeNull();
//   //   expect(screen.findByText(/cancel/i)).not.toBeNull();
//   // });

//   it("Trigger onChange when save or cancel is clicked", async () => {
//     //   // fireEvent.click(await screen.findByText(/save/i));

//     // console.log((await screen.findAllByRole("button")).length);
//     //   fireEvent.click(await screen.findByText(/cancel/i));

//     //   expect(onChangeValue).toHaveBeenCalledTimes(2);
//     expect(1).toBe(1);
//   });
// });

describe("Test MyMultiSelect component", () => {
  it("Clicking on the component shows the dropdown panel with buttons", async () => {
    const onChangeValue = jest.fn();
    const user = userEvent.setup();

    const { container } = render(
      <MyMultiSelect placeholder="placeholder345" onChange={onChangeValue} />
    );

    const multiSelectComponent = await screen.getByText(/placeholder345/i);
    const trigger = await container.querySelector(".p-multiselect-trigger");

    console.log(multiSelectComponent.outerHTML);
    console.log(trigger.outerHTML);

    // Click on the component to show the dropdown panel
    // fireEvent.click(multiSelectComponent);
    // fireEvent.click(trigger);
    
    waitFor(async () => await user.click(trigger));


    // Confirm the existence of buttons in the dropdown panel
    const saveButton = await screen.findByLabelText("Save");
    const cancelButton = await screen.findByLabelText("Cancel");

    expect(saveButton).not.toBeNull();
    expect(cancelButton).not.toBeNull();

    console.log(container.outerHTML);
  });
});
