import { NavLink } from "react-router-dom";
import links from "../utils/links";

//// styles
import styles from "../styles/navLinksStyles.module.scss";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive
                ? `${styles.navLink} ${styles.active}`
                : styles.navLink;
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className={styles.icon}>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
