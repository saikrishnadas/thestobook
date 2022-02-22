import NavContainer from "../../containers/NavContainer";
import Trending from "../../containers/Trending";
import dbConnect from "../../utils/mongo";
import Author from "../../models/Author";
import Book from "../../models/Book";
import { HomeProps } from "../../utils/typings";

function index({ authors, books }: HomeProps) {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <Trending authors={authors} books={books} />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  await dbConnect();

  const resp_authors = await Author.find({});
  const authors = JSON.parse(JSON.stringify(resp_authors));

  const resp_books = await Book.find({});
  const books = JSON.parse(JSON.stringify(resp_books));
  return {
    props: {
      authors,
      books,
    },
    revalidate: 3600,
  };
}
