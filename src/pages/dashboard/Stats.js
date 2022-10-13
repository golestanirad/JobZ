import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//// components
import { StatsContainer, ChartsContainer } from "../../components";

/// store
import { showStats } from "../../store/allJobs/allJobsSlice";

const Stats = () => {
  /// hooks
  const { monthlyApplications } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// return
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
