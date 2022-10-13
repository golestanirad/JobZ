/// styles
import styles from "../styles/loadingStyles.module.scss";

const Loading = ({ center }) => {
  return (
    <div
      className={
        center ? `${styles.loading} ${styles.loadingCenter}` : styles.loading
      }
    >
      <div className={styles.bigLoading}></div>
      <div className={styles.smallLoading}></div>
    </div>
  );
};
export default Loading;
