import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { titlePage } from "../lib/titleHead";
import { Creators as TodoActions } from "../redux/toDoRedux";
const DashboardModule = lazy(() =>
  import("../components/dashboard/dashboard")
);
const Header = lazy(() =>
  import("../layout/header")
);


function Dashboard() {
  const dispatch = useDispatch();
  const getActivities = () => dispatch(TodoActions.getActivitiesRequest());
  useEffect(() => {
    titlePage({
      title: "To Do List - Dashboard",
    });
    getActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <DashboardModule />
    </Suspense>
  );
}

export default Dashboard;