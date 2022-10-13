import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

//// components
import Logo from "./Logo";
import NavLinks from "./NavLinks";

/// store
import { toggleSidebar } from "../store/user/userSlice";

//// styles
import styles from "../styles/smallSidebarStyles.module.scss";

const SmallSidebar = () => {
  /// hooks
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //// handlers
  const toggle = () => {
    dispatch(toggleSidebar());
  };

  ///
  return (
    <div className={styles.container}>
      <div
        className={
          isSidebarOpen
            ? `${styles.sidebarContainer} ${styles.showSidebar}`
            : styles.sidebarContainer
        }
      >
        <div className={styles.content}>
          <button className={styles.closeBtn} onClick={toggle}>
            <FaTimes />
          </button>
          <div className={styles.logo}>
            <Logo />
          </div>
          <NavLinks toggleSidebar={toggle} />
        </div>
      </div>
    </div>
  );
};
export default SmallSidebar;
