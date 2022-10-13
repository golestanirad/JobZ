//// styles
import styles from "../styles/jobInfoStyles.module.scss";

const JobInfo = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon} </span>
      <span className={styles.text}>{text} </span>
    </div>
  );
};
export default JobInfo;
