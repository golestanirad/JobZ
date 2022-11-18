import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { useSelector } from "react-redux";

/// components
import StatItem from "./StatItem";

/// styles
import styles from "../styles/statsContainerStyles.module.scss";

const StatsContainer = () => {
  /// hooks
  const { stats } = useSelector((store) => store.allJobs);

  /// helpers
  const statsItems = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  /// return
  return (
    <div className={styles.container}>
      {statsItems.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </div>
  );
};
export default StatsContainer;
