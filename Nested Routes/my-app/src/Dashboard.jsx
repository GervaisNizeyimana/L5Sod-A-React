import{Link,Outlet} from "react-router-dom"

function Dashboard(){
    return <div>
        <h3>Welcome to Dashboard</h3>
        <Link to="/dashboard/overview">overview</Link><br/>
        <Link to="/dashboard/stats"> Stats</Link>
        <Outlet/>

    </div>
}

export default Dashboard