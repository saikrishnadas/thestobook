import NavContainer from "../../containers/NavContainer";
import CategoryContainer from "../../containers/CategoryContainer";
import HeadTag from "../../components/HeadTag";

function index() {
  return (
    <>
      <HeadTag title="Categories" />
      <div style={{ display: "flex" }}>
        <NavContainer />
        <CategoryContainer />
      </div>
    </>
  );
}

export default index;
