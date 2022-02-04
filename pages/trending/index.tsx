import NavContainer from "../../containers/NavContainer";
import Trending from "../../containers/Trending";
function index() {
  return (
    <div style={{ display: "flex" }}>
      <NavContainer />
      <Trending />
    </div>
  );
}

export default index;
