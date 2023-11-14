import React from "react";
import { render, screen } from "@testing-library/react";

import StylesImport from ".";

describe("These tests cover well running when importing sass, scss or css files", () => {
  it("Renders Test component with scss, css imports without an error", () => {
    render(<StylesImport />);
    expect(screen.findByText(/test/i)).not.toBeNull();
  });
});
