import { Link } from "react-router-dom";

/// assets
import img from "../assets/images/not-found.svg";

//// styles
import styles from "../styles/errorPageStyles.module.scss";

const Error = () => {
  return (
    <div className={`full-page ${styles.container}`}>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </div>
  );
};
export default Error;
