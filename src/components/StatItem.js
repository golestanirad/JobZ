//// styles
import styles from "../styles/statItemStyles.module.scss";

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <div className={styles.container} style={{ borderBottom: color }}>
      <header className={styles.header}>
        <span className={styles.count} style={{ color }}>
          {count}
        </span>
        <span className={styles.icon} style={{ background: bcg, color }}>
          {icon}
        </span>
      </header>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};
export default StatItem;
