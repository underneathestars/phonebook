import { useState } from "react";

export default function EntryForm({addEntryToPhoneBook}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
  

    const handleSubmit = (e) => {
      e.preventDefault();
      addEntryToPhoneBook({firstName, lastName, number});
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name:</label>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name..."
          required
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="LastName">Last Name:</label>
        <input
          type="text"
          name="LastName"
          placeholder="Last Name..."
          required
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="Number">Phone Number:</label>
        <input
          type="tel"
          name="Number"
          placeholder="Phone Number..."
          required
          autoComplete="off"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='submit'>Add Entry</button>
      </form>
    );
  }