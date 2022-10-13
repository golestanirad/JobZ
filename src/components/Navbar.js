import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//// components
import Logo from "./Logo";

/// store
import { clearStore } from "../store/user/userSlice";
import { toggleSidebar } from "../store/user/userSlice";

//// styles
import styles from "../styles/navbarStyles.module.scss";

const Navbar = () => {
  //// hooks
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //// handlers
  const handleToggle = () => {
    console.log(123);
    dispatch(toggleSidebar());
  };

  const handleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    dispatch(clearStore("Logging out..."));
  };

  //// return
  return (
    <div className={styles.container}>
      <div className={styles.navCenter}>
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={handleToggle}
        >
          <FaAlignLeft />
        </button>
        <div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <h3 className={styles.logoText}>dashboard</h3>
        </div>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={`btn ${styles.logBtn}`}
            onClick={handleShowLogout}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={
              showLogout
                ? `${styles.dropdown} ${styles.showDropdown}`
                : styles.dropdown
            }
          >
            <button
              type="button"
              className={styles.dropdownBtn}
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
