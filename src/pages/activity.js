import React from "react";

const Activity = () => {
  return (
    <div className="container">
      <div class="todo-header">
        <h1 data-cy="activity-title">Activity</h1>
        <button class="btn btn-primary" data-cy="activity-add-button">
          <span class="icon-plus"></span> Tambah
        </button>
      </div>
    </div>
  );
};

export default Activity;
