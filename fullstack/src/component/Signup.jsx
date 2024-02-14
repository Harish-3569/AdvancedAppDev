import './Signin'
import{Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div className='whole'>
        
    <div className='signin'>
        <center>EVENT MANAGER</center>
        <h2><center>Sigup:</center></h2>
        <form>
            Name:
            <br></br>
            <input></input>
            <br></br>
            Email:
            <br></br>
            <input type='email'></input>
            <br></br>
            Date Of Birth:
            <br></br>
            <input type='date'></input>
            <br></br>
            Role:
            <br></br>
            <br></br>
            <br></br>
            <center><Link to="/Signin"><button type='submit' className='button-85'>Submit</button></Link></center>
        </form>
        </div>
        </div>

  )
}

export default Signup
