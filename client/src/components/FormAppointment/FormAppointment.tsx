import React, { useState } from 'react';
import './form-appointment-style.css'

const FormAppointment: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:777/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });
      if (response.ok) {
        alert('Appointment booked successfully!');
      } else {
        alert('Failed to book appointment.');
        console.log(response.json())
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Записаться на ремонт</h2>
      <p>и получить в подарок диагностику а/м по 45 параметрам с выдачей чек-листа на руки</p>
      <form>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmitAppointment}>
          Записаться на ремонт
        </button>
      </form>
    </div>
  );
};

export default FormAppointment;
