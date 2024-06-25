import React, { useEffect, useState } from 'react';
import './appointment-list-style.css'

interface Appointment {
  _id: string;
  name: string;
  phone: string;
  date: string;
}

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:777/api/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const deleteAppointment = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:777/api/appointments/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }
      setAppointments(appointments.filter(appointment => appointment._id !== id));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id} className="appointment-list__item">
            <p><strong>Name:</strong> {appointment.name}</p>
            <p><strong>Phone:</strong> {appointment.phone}</p>
            <p><strong>Date:</strong> {new Date(appointment.date).toLocaleString()}</p>
            <button className='appointment-list__delete-btn btn' onClick={() => deleteAppointment(appointment._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
