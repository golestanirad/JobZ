import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";

/// components
import JobInfo from "./JobInfo";

//// store
import { deleteJob, setEditJob } from "../store/job/jobSlice";

/// styles
import styles from "../styles/jobStyles.module.scss";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  /// hooks
  const dispatch = useDispatch();

  /// helpers
  const date = moment(createdAt).format("MMM Do, YYYY");

  //// handlers
  const handleEdit = () => {
    dispatch(
      setEditJob({
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteJob(_id));
  };

  // returns
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.mainIcon}>{company.charAt(0)}</div>
        <div className={styles.info}>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.contentCenter}>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`${styles.status} ${styles[status]}`}>{status}</div>
        </div>
        <footer>
          <div className={styles.actions}>
            <Link
              to="/add-edit-job"
              className={`btn ${styles.editBtn}`}
              onClick={handleEdit}
            >
              Edit
            </Link>
            <button
              type="button"
              className={`btn ${styles.deleteBtn}`}
              onClick={handleDelete}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Job;
