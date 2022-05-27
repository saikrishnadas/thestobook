import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TopMain from "../TopMain";

describe("TopMain Search Bar", () => {
  it("should render input element", () => {
    render(<TopMain />);
    const inputElement = screen.getByTestId(/inputbox/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should contain clear text from the input after button click", async () => {
    render(<TopMain />);
    const inputElement = await screen.findByTestId(/inputbox/i);
    const buttonElement = await screen.findByTestId(/searchbutton/i);
    fireEvent.change(inputElement, { target: { value: "chetan bagat" } });
    fireEvent.click(buttonElement);
    waitFor(() => expect(inputElement.value).toBe(""));
  });
});
