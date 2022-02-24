import rightarrow from "../public/rightarrow.svg";
import leftarrow from "../public/leftarrow.svg";

type ProgressBarProps = {
  onClickScroll: (scrollOffset: number) => void;
  handleProgress: (arrow: string) => void;
};

function ProgressBar({ onClickScroll, handleProgress }: ProgressBarProps) {
  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <img
        src={leftarrow.src}
        alt="left arrow icon"
        style={{ cursor: "pointer", opacity: "0.8" }}
        onClick={() => {
          onClickScroll(-100);
          handleProgress("minus");
        }}
      />
      <img
        src={rightarrow.src}
        alt="right arrow icon"
        style={{ cursor: "pointer" }}
        onClick={() => {
          onClickScroll(100);
          handleProgress("plus");
        }}
      />
    </span>
  );
}

export default ProgressBar;
