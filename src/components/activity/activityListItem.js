import React from "react";
import ActivityItemDeleteButton from "../../assets/img/activity-item-delete-button.svg";
import moment from "moment";

const ActivityListItem = ({props}) => {

  return (
    <div
      className="activity-card"
      data-cy="activity-item"
      id={"itemTodo" + props.index}
    >
      <div className="activity-body">
        <h4 data-cy="activity-item-title">{props.activityItem.title}</h4>
      </div>
      <div className="card-footer">
        <span data-cy="activity-item-date">
          {props.activityItem.created_at}
          {/* {moment(props.activityItem.created_at).format("d MMMM yyyy")} */}
        </span>
        <img
          src={ActivityItemDeleteButton}
          alt="delete"
          data-cy="activity-item-delete-button"
          onClick={() => props.handleDeleteActivity(props.activityItem.id)}
        />
      </div>
    </div>
  );
};

export default ActivityListItem;
