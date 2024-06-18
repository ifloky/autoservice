import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', form);
      alert('Appointment created successfully');
    } catch (err) {
      console.error(err);
      alert('Error creating appointment');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h1>Make an Appointment</h1>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="service" placeholder="Service" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;
