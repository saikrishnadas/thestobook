import NavContainer from "../../components/NavContainer";
import MainContainer from "../../components/MainContainer";
import AuthorContainer from "../../components/AuthorContainer";
function author() {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <AuthorContainer />
    </div>
  );
}

export default author;
