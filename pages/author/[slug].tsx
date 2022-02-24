import NavContainer from "../../containers/NavContainer";
import AuthorContainer from "../../containers/AuthorContainer";
import dbConnect from "../../utils/mongo";
import Author from "../../models/Author";
import { AuthorProps, BookProps } from "../../utils/typings";
import HeadTag from "../../components/HeadTag";
import Book from "../../models/Book";

type AuthorSlugProps = {
  author: AuthorProps;
  books: BookProps[];
};

function author({ author, books }: AuthorSlugProps) {
  return (
    <>
      <HeadTag title="Author" />
      <div style={{ display: "flex" }}>
        <NavContainer />
        <AuthorContainer author={author} books={books} />
      </div>
    </>
  );
}

export default author;

export const getStaticPaths = async () => {
  await dbConnect();
  const resp = await Author.find({});
  const authors = JSON.parse(JSON.stringify(resp));
  const paths = authors.map((author: any) => {
    return {
      params: { slug: author.slug },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: { params: AuthorProps }) {
  const { slug } = params;
  await dbConnect();

  const resp = await Author.findOne({ slug });
  const author = JSON.parse(JSON.stringify(resp));

  const resp_book = await Book.find({ authorId: author.authorId });
  const books = JSON.parse(JSON.stringify(resp_book));
  return {
    props: {
      author,
      books,
    },
    revalidate: 300,
  };
}
