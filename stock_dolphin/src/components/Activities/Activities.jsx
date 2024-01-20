import "./Activities.css";

export const Activities = () => {
  return (
    <div>
      <div className='activities-container'>
        <div className='img-container-sort'>
        <img className="descending-sorting" src="/images/DescendingSorting.png" alt="Descending Sorting" />
        </div>
        <div className='recent-activity-container'>
          <div className='activity-box1'>
          <p className="activity-box-text">Admin has ACTIVITY item <b>NAME OF ITEM</b> in <b>TYPE OF CATEGORY(NAME OF CATEGORY)</b></p>
          <p>DATE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

