import NavContainer from "../../containers/NavContainer";
import CategoryContainer from "../../containers/CategoryContainer";

function index() {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <CategoryContainer />
    </div>
  );
}

export default index;
