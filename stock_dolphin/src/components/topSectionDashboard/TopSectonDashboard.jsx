import "./TopSectionDashboard.css";
// import { Header } from "../../components/Header/Header";

export const TopSectonDashboard = () => {
  return (
    <div className='top-section-dashboard'>
        <div className="top-section">
          <h1>Dashboard</h1>
          <div className='user-section'>
          <h2 >Welcome back NAME SURNAME!</h2>
          <img src="/images/User.png" alt="user" />
          </div>
        </div>
        <hr/>
        {/* <Header headerTitle="Dashboard" /> */}
        {/* da se dobravi koga kje dodadam NAME AND SURNAME */}
    </div>
  )
}
