import rightarrow from "../public/rightarrow.svg";
import leftarrow from "../public/leftarrow.svg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function ProgressBar({ onClickScroll, handleProgress, progress }: any) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <img
        src={leftarrow.src}
        style={{ cursor: "pointer", opacity: "0.8" }}
        onClick={() => {
          onClickScroll(-100);
          handleProgress("minus");
        }}
      />
      <img
        src={rightarrow.src}
        style={{ cursor: "pointer" }}
        onClick={() => {
          onClickScroll(100);
          handleProgress("plus");
        }}
      />
      {/* <Box sx={{ width: "161px" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box> */}
    </span>
  );
}

export default ProgressBar;
