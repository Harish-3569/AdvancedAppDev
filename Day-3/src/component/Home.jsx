import './Home.css'
const Home = () => {
  return (
    <div>
      <div className="top">
       <h1><img width='50px' src='data:image/jpeg;base64,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'></img>   ANNAPOORANI EVENT SETTERS </h1>
       {/* <img className='logo' width='50px' src='https://cdn1.vectorstock.com/i/1000x1000/45/65/user-icon-human-person-sign-vector-20444565.jpg'></img> */}
       <div className='navbar'>
       <h3 className='h3'>Has Huge pride in Welcoming you</h3>
        <a href="default.asp">Home</a>
        <a href="default.asp">Sign Out</a>
        <a href="default.asp">Galary</a>
        <a href="news.asp">My Bookings</a>
        <a href="contact.asp">Contact</a>
        <a href="about.asp">About</a>
      </div>
       </div>
    <div className='whole1'>
      <div className='partyone'>
    <div className='party1'>
    </div>
     <div className='party12'>
         <center><h1>Hall 1</h1>    
         <h3>
            Seating Capacity: 200<br></br><br></br>
            Airconditioner: Yes<br></br>
            
         </h3>
         </center>
     
    </div>
    </div>
    <div className='partyone'>
    <div className='party2'>
     </div>
     <div className='party21'>
     <center><h1>Hall 2</h1>    
         <h3>
            Seating Capacity: 100<br></br><br></br>
            Airconditioner: Yes<br></br>
            
         </h3>
         </center>
    </div>
    </div>
    <div className='party3'>
      <img src='https://t3.ftcdn.net/jpg/04/39/84/68/360_F_439846866_jJwJchKXLZBFaCKjKILzk0Xb2cwSqteQ.jpg'></img>
     </div>
    <div className='party31'>
     <center><h1>Hall 2</h1>    
         <h3>
            Seating Capacity: 100<br></br><br></br>
            Airconditioner: Yes<br></br>
            
         </h3>
         </center>
    </div>
    </div>
    </div>
  )
}

export default Home
