import './Signin.css'
import{Link} from 'react-router-dom'
const Signin = () => {
  return (
    <div className='whole'>
        
    <div className='signin'>
        <center>EVENT MANAGER</center>
        <h2><center>Sigin:</center></h2>
      <form>
         <h3>Email:</h3>
         <input className='textbar'></input>
         <br></br>
        <h3>Password:</h3>
        <input></input>
        <br></br>
        <br></br>
        <center><Link to="/Intro"><button className='button-85'>Submit</button></Link></center>
      </form>
    </div>
    </div>
  )
}

export default Signin
