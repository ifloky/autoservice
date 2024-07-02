import React, { useEffect, useState } from 'react';
import './work-performed.css';
import { Spinner } from '../../components/Spinner/Spinner';

interface Service {
  name: string;
  price: number;
}

const defaultServices: Service[] = [
  { name: 'Техническое обслуживание', price: 50 },
  { name: 'Ремонт АКПП, МКПП', price: 150 },
  { name: 'Чистка инжекторов', price: 30 },
  { name: 'Шиномонтаж', price: 20 },
  { name: 'Замена стекол', price: 100 },
];

export const WorkPerformed: React.FC = () => {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/services');
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data: Service[] = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="price-list-container">
      {loading ? (
        <Spinner />
      ) : (
        <main className="main-price-list">
          <section id="price-list">
            <h2>Наши услуги</h2>
            <table>
              <thead>
                <tr>
                  <th>Услуга</th>
                  <th>Цена (BYN)</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      )}
    </div>
  );
};