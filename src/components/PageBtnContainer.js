import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

//// store
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../store/allJobs/allJobsSlice";

//// styles
import styles from "../styles/pageButtonContainerStyles.module.scss";

const PageBtnContainer = () => {
  /// hooks
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  /// helpers
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  /// handlers
  const handleNextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const handlePrevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  const handleChangePage = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  //// return
  return (
    <div className={styles.container}>
      <button type="button" className={styles.prevBtn} onClick={handlePrevPage}>
        <HiChevronDoubleLeft />
      </button>
      <div className={styles.btnContainer}>
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={
                pageNumber === page
                  ? `${styles.pageBtn} ${styles.active}`
                  : styles.pageBtn
              }
              onClick={() => handleChangePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" className={styles.nextBtn} onClick={handleNextPage}>
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};
export default PageBtnContainer;
