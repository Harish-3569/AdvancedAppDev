// src/components/PasswordForm.jsx
import './Adminlog.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/';
// import{Link} from 'react-router-dom'
const Adminlog = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === 'Hd#1234') {
      // Password is correct, you can proceed with further actions here
      history.push("/Ahome")
      console.log('Password is correct!');
    } else {
      setErrorMessage('Invalid password. Please enter correct password.');
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <center>
          <div className='yhju'>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label><br></br><br></br><br></br>
      <button type="submit">Submit</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      </center>
    </form>
    </div>
  );
};

export default Adminlog;
