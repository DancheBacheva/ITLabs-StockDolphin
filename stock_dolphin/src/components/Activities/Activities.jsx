import "./Activities.css";
import React, { useContext } from "react";
import { DataContext } from "../../App";

export const Activities = () => {
  const { activities } = useContext(DataContext);

  return (
    <div>
      <div className="activities-container">
        <div className="img-container-sort">
          <img
            className="descending-sorting"
            src="/images/DescendingSorting.png"
            alt="Descending Sorting"
          />
        </div>
        <div className="recent-activity-container">
          {activities.map((activity) => (
            <div key={activity._id} className="activity-box1">
              <p className="activity-box-text">
                Admin has {activity.activity} item <b>{activity.itemTitle}</b> in <b>{activity.categoryTitle}({activity.categoryTitle})</b>
                {/* ova da se napravi so split i da se zema samo imeto na kategorijata za da bide (Office Categories) */}
              </p>
              <p>{activity.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
