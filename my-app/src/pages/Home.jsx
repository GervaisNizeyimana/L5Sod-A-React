
import { Link } from "react-router-dom"
export default function Home (){
    return<div>
    
    <h1>Welcome to Home page</h1>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/contact">Contact</Link><br/>
    <Link to="/unknown">Unknown</Link>
    </div>
}