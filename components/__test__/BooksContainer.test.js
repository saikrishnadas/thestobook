import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BooksContainer from "../BooksContainer";

describe("Books", () => {
  const title = "Newly Added";
  const books = [
    {
      _id: "61fd1f3dacf3ca52b15605f9",
      name: "2 States: The Story of My Marriage",
      slug: "2-states-the-story-of-my-marriage",
      author: "Chetan Bhagat",
      img: "https://images-na.ssl-images-amazon.com/images/I/71as0QgjDaL.jpg",
      createdAt: "2022-02-04T12:42:37.264Z",
      updatedAt: "2022-02-07T03:15:57.908Z",
      __v: 0,
      authorId: "0",
      category: "romance",
    },
    {
      _id: "61fd1f5bacf3ca52b15605fb",
      name: "400 Days",
      slug: "400-days",
      author: "Chetan Bhagat",
      img: "https://images-na.ssl-images-amazon.com/images/I/81tSFxicufL.jpg",
      createdAt: "2022-02-04T12:43:07.762Z",
      updatedAt: "2022-02-07T03:16:16.784Z",
      __v: 0,
      authorId: "0",
      category: "crime",
    },
  ];

  it("should render category title", async () => {
    render(<BooksContainer title={title} books={books} />);
    const divElement = await screen.findByText("Newly Added");
    expect(divElement).toBeInTheDocument();
  });

  it("should render books", async () => {
    render(<BooksContainer title={title} books={books} />);
    const divElement = await screen.findByTestId("bookcontainer-0");
    expect(divElement).toBeInTheDocument("2 States: The Story of My Marriage");
  });

  it("should render multiple books", async () => {
    render(<BooksContainer title={title} books={books} />);
    const divElement = await screen.findAllByTestId(/bookcontainer/i);
    expect(divElement.length).toBe(3);
  });

  it("should render book modal for specfic book", async () => {
    render(<BooksContainer title={title} books={books} />);
    const bookElement = await screen.findByText("400 Days");
    fireEvent.click(bookElement);
    const modalElement = await screen.findByTestId(/bookmodal/i);
    expect(modalElement).toBeInTheDocument("400 Days");
  });
});
