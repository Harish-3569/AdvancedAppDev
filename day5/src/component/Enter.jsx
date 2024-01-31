import './Enter.css'
import{Link} from 'react-router-dom'
const Enter = () => {
  return (
    <div className='ent'>
        <center>
       <Link to='/Adminlog'> <button>Admin</button></Link>
        <br></br><br></br><br></br>
        <Link to='/Signup'><button>User</button></Link>
        </center>
    </div>
  )
}

export default Enter
