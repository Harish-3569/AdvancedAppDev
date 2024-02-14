import './Bookhall.css'
import { useState } from 'react';
const Bookhall = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        HallNo: '',
        organizer: '',
      });
    
      // Handle form input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add logic to handle form submission, e.g., API call or other processing
        console.log('Form submitted:', formData);
        // Reset form data after submission
        setFormData({
          eventName: '',
          date: '',
          HallNo: '',
          organizer: '',
        });
      };
    
  return (
    <div className='bak'>
       <center> BOOK YOUR DATE</center>
      <div className='book'>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:<br></br>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <br></br>

        <label>
          Date:<br></br>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label><br></br>
        <br />

        <label>
          HallNo:<br></br>
          <input
            type="integer"
            name="HallNo"
            value={formData.HallNo}
            onChange={handleInputChange}
            required
          />
        </label><br></br>
        <br />

        <label>
          Organizer:<br></br>
          <input
            type="text"
            name="organizer"
            value={formData.organizer}
            onChange={handleInputChange}
            required
          />
        </label><br></br>
        <br />
<br></br>
<br></br>        <button type="submit">Book Event</button>
      </form>
      </div>
    </div>
  )
}

export default Bookhall
