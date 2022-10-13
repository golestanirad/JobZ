import { useState } from "react";
import { useSelector } from "react-redux";

//// components
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

//// styles
import styles from "../styles/chartsContainerStyles.module.scss";

const ChartsContainer = () => {
  //// hooks
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  /// handlers
  const handleChangeChartClick = () => {
    setBarChart(!barChart);
  };

  /// return
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Monthly Applications</h4>
      <button
        type="button"
        onClick={handleChangeChartClick}
        className={styles.chartBtn}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
};
export default ChartsContainer;
