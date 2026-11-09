
import{Routes,Route} from"react-router-dom"
import Dashboard from "./Dashboard"
import OverView from "./OverView"
import Stats from "./Stats"
import Home from"./Home.jsx"

function App(){
  return<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="overview" element={<OverView/>}/>
      <Route path="stats" element={<Stats/>}/>



    </Route>
  </Routes>
}
export default App