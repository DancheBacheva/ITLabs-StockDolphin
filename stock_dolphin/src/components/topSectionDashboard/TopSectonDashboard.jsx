import "./TopSectionDashboard.css";

export const TopSectonDashboard = () => {
  return (
    <div >
      <header className='top-section-dashboard'>
        <div className="top-section">
          <h1>Dashboard</h1>
          <div className='user-section'>
          <h2 >Welcome back NAME SURNAME!</h2>
          <img src="/images/User.png" alt="user" />
          </div>
        </div>
        <hr/>
      </header>
    </div>
  )
}
