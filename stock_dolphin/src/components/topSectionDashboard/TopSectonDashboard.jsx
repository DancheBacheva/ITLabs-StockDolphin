import "./TopSectionDashboard.css";

export const TopSectonDashboard = () => {
  return (
    <div className='top-section-dashboard'>
      <header>
        <div className="top-section">
          <h1 className='dashboard-title'>Dashboard</h1>
          <div className='user-section'>
          <h2 className='welcome'>Welcome back NAME SURNAME!</h2>
          <img className='user-img' src="/images/User.png" alt="user" />
          </div>
        </div>
        <hr className='line'/>
      </header>
    </div>
  )
}
