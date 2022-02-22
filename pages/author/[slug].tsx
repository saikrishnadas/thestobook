import NavContainer from "../../containers/NavContainer";
import AuthorContainer from "../../containers/AuthorContainer";
import dbConnect from "../../utils/mongo";
import Author from "../../models/Author";
import { AuthorProps } from "../../utils/typings";

function author({ author }: { author: AuthorProps }) {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <AuthorContainer author={author} />
    </div>
  );
}

export default author;

export async function getServerSideProps({ query }: { query: AuthorProps }) {
  const { slug } = query;
  await dbConnect();

  const resp = await Author.findOne({ slug });
  const author = JSON.parse(JSON.stringify(resp));
  return {
    props: {
      author,
    },
  };
}
