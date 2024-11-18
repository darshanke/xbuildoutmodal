import "./App.css";
import React, { useState } from "react";

function App() {
  const [modalStatus, setModalDetails] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    emailAddress: "",
    phoneNumber: "",
    DateofBirth: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Email
    if (!form.emailAddress.includes("@")) {
      window.alert("Invalid email. Please check your email address.");
      return;
    }

    // Validate Phone Number
    if (form.phoneNumber.length !== 10) {
      window.alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Validate Date of Birth
    const currentDate = new Date();
    const formDate = new Date(form.DateofBirth);
    if (formDate > currentDate) {
      window.alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // Form reset after successful submission
    setForm({
      userName: "",
      emailAddress: "",
      phoneNumber: "",
      DateofBirth: "",
    });
    setModalDetails(false); // Close modal
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const closeModalOnOutsideClick = (e) => {
    if (e.target.className === "modal") {
      setModalDetails(false);
    }
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button
        style={{ background: "blue", color: "white" }}
        onClick={() => setModalDetails(true)}
      >
        Open Form
      </button>

      {modalStatus && (
        <div className="modal" onClick={closeModalOnOutsideClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h1>Fill Details</h1>

              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="userName"
                required
                value={form.userName}
                onChange={handleChange}
              />
              <br />

              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="emailAddress"
                required
                value={form.emailAddress}
                onChange={handleChange}
              />
              <br />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="number"
                id="phone"
                name="phoneNumber"
                required
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <br />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="DateofBirth"
                required
                value={form.DateofBirth}
                onChange={handleChange}
              />
              <br />

              <button type="submit" className="submit-button" style={{ background: "blue", color: "white" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
