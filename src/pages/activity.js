import axios from "axios";
import React, { useEffect, useState } from "react";
import EmptyActivity from "../components/activity/emptyActivity";
import ActivityList from "../components/activity/activityList";

const Activity = () => {
  const [activityList, setActivityList] = useState([]);

  const getActivity = () => {
    axios
      .get()
      .then(function (response) {
        setActivityList(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteActivity = (id) => {
    axios
      .delete("/" + id)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getActivity();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getActivity();
  }, []);

  const handleClickAdd = () => {

    const config = {
      method: "post",
      data: { title: "New test activity", email: "csworksdev@gmail.com" },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getActivity();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="todo-header">
        <h1 data-cy="activity-title">Activity</h1>
        <button
          className="btn btn-primary"
          data-cy="activity-add-button"
          onClick={() => handleClickAdd()}
        >
          <span className="icon-plus"></span> Tambah
        </button>
      </div>
      <div className="dashboard-content">
        {activityList ? (
          <ActivityList
            activityList={activityList}
            handleDeleteActivity={deleteActivity}
          />
        ) : (
          <EmptyActivity />
        )}
      </div>
    </div>
  );
};

export default Activity;
