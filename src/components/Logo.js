/// assets
import logo from "../assets/images/logo.png";

/// styles
import styles from "../styles/logoStyles.module.scss";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="jobs" className={styles.logo} />
      <div className={styles.title}>JobZ</div>
    </div>
  );
};
export default Logo;
