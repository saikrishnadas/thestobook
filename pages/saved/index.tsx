import NavContainer from "../../containers/NavContainer";
import SavedContainer from "../../containers/SavedContainer";
function index() {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <SavedContainer />
    </div>
  );
}

export default index;
