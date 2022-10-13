import { Link } from "react-router-dom";

//// assets
import feelingProud from "../assets/images/undraw_feeling_proud.svg";

/////components
import { Logo } from "../components";

///styles
import styles from "../styles/landingPageStyles.module.scss";

const Landing = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <div className={`container ${styles.page}`}>
        <div>
          <h1 className={styles.title}>
            job <span className={styles.highlight}>tracking</span> app
          </h1>
          <p className={styles.text}>
            Looking for a job? <br />
            Applying for many jobs? <br />
            Hard to keep track of all jobs that you love?
            <br /> This app is designed just for you!
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img
          src={feelingProud}
          alt="job hunt"
          className={`img ${styles.mainImg}`}
        />
      </div>
    </div>
  );
};

export default Landing;
