import { render, screen } from "@testing-library/react";
import MenuSelect from "../MenuSelect";

describe("MenuSelect", () => {
  const user = {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA5ZWIxYmUwZjc5OGFiMWMwYzQ3ZDUiLCJuYW1lIjoidGVzdCB1c2VyIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MzU4MjA5MSwiZXhwIjoxNjU2MTc0MDkxfQ.kBJTg5-EfTGyUlXldklAMbsY_fcpay4_LbqeISYprU0",
    _id: "6209eb1be0f798ab1c0c47d5",
    name: "test user",
    email: "user@test.com",
    isAdmin: false,
  };
  it("should have author menu if the user is logged in", () => {
    render(<MenuSelect user={user} />);
    const textElement = screen.getByText(/authors/i);
    expect(textElement).toBeVisible();
  });
});
