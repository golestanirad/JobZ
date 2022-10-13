import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/// components
import Loading from "./Loading";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";

/// store
import { getAllJobs } from "../store/allJobs/allJobsSlice";

/// styles
import styles from "../styles/jobsContainerStyles.module.scss";

const JobsContainer = () => {
  //// hooks
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  ////// returns
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.noJobs}>Didn't find any jobs</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className={styles.jobs}>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};
export default JobsContainer;
