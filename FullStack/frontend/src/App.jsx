
// import Signin from './component/Signin'
// import Signup from './component/Signup'
// import Home from './component/Home'
// import Intro from './component/Intro'
// import Bookhall from './component/Bookhall'
// import Gallery from './component/Gallery'
// const App = () => {
//   return (
//     <div>
//       <Gallery />
//       {/* <Signin /> */}
//       {/* <Signup /> */}
//       {/* <Home /> */}
//       {/* <Intro /> */}
//       {/* <Bookhall /> */}
//     </div>
//   )
// }

//  export default App
import './App.css'
import Signin from './component/Signin'
import Enter from './component/Enter'
import Signup from './component/Signup'
import Home from './component/Home'
import Intro from './component/Intro'
import Adminlog from './component/Adminlog'
import Bookhall from './component/Bookhall'
import Allevents from './component/Allevents'
import Ahome from './component/Ahome'

import Dashboard from './component/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Gallery from './component/Gallery'
function App() { 
  return ( 
  <> <Router>
     <Switch> 
      <Route path="/" exact component={Enter} /> 
      <Route path="/Signin" exact component={Signin} /> 
      <Route path="/Signup" exact component={Signup} /> 
      <Route path="/Home" exact component={Home} /> 
      <Route path="/Intro" exact component={Intro} /> 
      <Route path="/Bookhall" exact component={Bookhall} />  
      <Route path="/Gallery" exact component={Gallery}/>
      <Route path="/Adminlog" exact component={Adminlog}/>     
       <Route path="/Ahome" exact component={Ahome}/>
      <Route path="/Dashboard" exact component={Dashboard}/>
      <Route path="/Allevents" exact component={Allevents}/>
      </Switch> 
      </Router> 
      </> 
      ) 
    } 
    export default App