import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

//// components
import { FormRow, FormRowSelect } from "../../components";

/// store
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../store/job/jobSlice";

/// styles
import styles from "../../styles/addJobsPageStyles.module.scss";

const AddEditJob = () => {
  /// hooks
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  console.log({ jobLocation });
  const dispatch = useDispatch();

  /// handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  //// return
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.title}>{isEditing ? "edit job" : "add job"}</h3>
        <div className={styles.formCenter}>
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
            styles={styles}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
            styles={styles}
          />
          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
            styles={styles}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
            styles={styles}
          />
          {/* job type*/}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
            styles={styles}
          />
          <div className={styles.btnContainer}>
            <button
              type="button"
              className={`btn btn-block ${styles.clearBtn}`}
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddEditJob;
