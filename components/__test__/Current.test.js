import { render, screen } from "@testing-library/react";
import Current from "../Current";
import { RecoilRoot } from "recoil";

const MockCurrent = () => {
  return (
    <RecoilRoot>
      <Current />
    </RecoilRoot>
  );
};

describe("MenuSelect", () => {
  const current = {
    _id: "628f164f901c4b564bad6dca",
    name: "400 Days",
    slug: "400-days",
    category: "crime",
    author: "Chetan Bhagat",
    authorId: "0",
    img: "https://images-na.ssl-images-amazon.com/images/I/81tSFxicufL.jpg",
    user: "user@test.com",
    createdAt: "2022-05-26T05:55:27.055Z",
    updatedAt: "2022-05-26T05:55:27.055Z",
    __v: 0,
  };
  it("should have author menu if the user is logged in", () => {
    render(<MockCurrent />);
    const textElement = screen.getByText(/current reading book/i);
    expect(textElement).toBeVisible();
  });
});
