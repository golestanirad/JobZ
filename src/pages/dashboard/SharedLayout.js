import { Outlet } from "react-router-dom";

//// components
import { BigSidebar, Navbar, SmallSidebar } from "../../components";

//// styles
import styles from "../../styles/sharedLayoutStyles.module.scss";
const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <main className={styles.dashboard}>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className={styles.dashboardPage}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
export default SharedLayout;
