import "./App.css";
import react, { useEffect, useState } from "react";

function App() {
  const [modalStatus, setModalDetials] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    emailAddress: "",
    phoneNumber: "",
    DateofBirth: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    const formDate = new Date(form.DateofBirth);
    console.log(form.DateofBirth);
   if(form.phoneNumber.length <=9){
      window.alert("invalid phone number. Please enter 10-digit phone number");
      return;
   }
   if(formDate<=date){
    console.log("less")
   }else{
    window.alert("invalid date of birth. Date of birth cannot be in the future");
    return;
   }
   setForm({
    userName: "",
    emailAddress: "",
    phoneNumber: "",
    DateofBirth: "",
   })
   setModalDetials(false);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(value);
    setForm({ ...form, [name]: value });
  };
  useEffect(()=>{

  },[form])
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button style={{background: 'blue', color: 'white'}}
        onClick={() => {
          setModalDetials(true);
        }}
      >
        Open Form
      </button>

      {modalStatus && (
        <div className="modal">
          <div className="modal-content">
           
            <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Fill Details</h1>
              <label htmlFor="username">Username:</label>
   
              <input
                type="text"
                placeholder=""
                id="username"
                name="userName"
                required
                value={form.userName}
                onChange={handleChange}
              />
               <br />
              <label htmlFor="email">Email Address:</label>
              <input
                type='email'
                id='email'
                placeholder=""
                required
                name="emailAddress"
                value={form.emailAddress}
                onChange={handleChange}
              />
               <br />
              <label htmlFor="phone">Phone Number:</label>
     
              <input
                type="number"
                placeholder=""
                required
                id='phone'
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
              />
               <br />
              <label htmlFor="DateofBirth">Date of Birth:</label>
       
              <input
                type="date"
                placeholder=""
                required
                name="DateofBirth"
                value={form.DateofBirth}
                onChange={handleChange}
              />
               <br />
              <button type="submit" style={{background: 'blue' , color: "white"}}>Submit</button>
            
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
