import React, { useState, useEffect } from 'react';
import axios from 'axios';

type ApptType = Record<string, undefined>

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appt: ApptType) => (
          <li key={appt._id}>{appt.name} - {appt.date} - {appt.service}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsList;
