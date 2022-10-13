import { useSelector } from "react-redux";

//// components
import NavLinks from "./NavLinks";
import Logo from "./Logo";

/// styles
import styles from "../styles/bigSidebarStyles.module.scss";

const BigSidebar = () => {
  /// hooks
  const { isSidebarOpen } = useSelector((store) => store.user);

  /// return
  return (
    <aside className={styles.container}>
      <div
        className={
          isSidebarOpen
            ? `${styles.sidebarContainer} ${styles.showSidebar}`
            : styles.sidebarContainer
        }
      >
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;
