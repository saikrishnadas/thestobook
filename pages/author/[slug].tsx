import NavContainer from "../../containers/NavContainer";
import AuthorContainer from "../../containers/AuthorContainer";
function author() {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <AuthorContainer />
    </div>
  );
}

export default author;
