import React from "react";
import ActivityListItem from "./activityListItem";

const ActivityList = (props) => {
  return (
    <div className="row">
      {props.activityList.map((item, index) => {
        return (
          <div className="col-3" key={index}>
            <ActivityListItem
              activityItem={item}
              index={index}
              handleDeleteActivity={props.handleDeleteActivity}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ActivityList;
