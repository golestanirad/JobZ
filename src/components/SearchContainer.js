import { useSelector, useDispatch } from "react-redux";

///  components
import { FormRow, FormRowSelect } from "./index";

//// store
import { handleChange, clearFilters } from "../store/allJobs/allJobsSlice";

/// styles
import styles from "../styles/searchContainerStyles.module.scss";

const SearchContainer = () => {
  /// hooks
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);

  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  //// handlers
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  //// return
  return (
    <div className={styles.container}>
      <form className={`form ${styles.form}`}>
        <h4>search form</h4>
        <div className={styles.formCenter}>
          {/*  position  */}
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
            styles={styles}
          />
          {/* status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
            styles={styles}
          />
          {/* type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
            styles={styles}
          />
          {/* sort jobs */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            styles={styles}
          />
          <button
            className={`btn btn-block btn-danger ${styles.btnClear}`}
            disabled={isLoading}
            onClick={handleClear}
          >
            clear filters
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchContainer;
