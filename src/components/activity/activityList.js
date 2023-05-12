import React from "react";
import ActivityListItem from "./activityListItem";

const ActivityList = ({ activityList }) => {
  return (
      <div className="row">
        {activityList.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <ActivityListItem activityItem={item} index={index}/>
            </div>
          );
        })}
      </div>
  );
};

export default ActivityList;
