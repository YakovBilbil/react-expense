import "./ChartBar.css";
import "./__fill/ChartBar__fill.css";
import "./__inner/ChartBar__inner.css";
import "./__label/ChartBar__label.css";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
