import { render } from "@testing-library/react-native";
import React from "react";
import { Load } from ".";

const mockColor = "your-mock-color";

describe("Load component", () => {
  it("renders the component with default color", () => {
    const { getByTestId } = render(<Load />);
    const activityIndicator = getByTestId("load-activity-indicator");

    expect(activityIndicator.props.color).toBe(mockColor);
  });
});
