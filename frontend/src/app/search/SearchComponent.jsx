'use client';
import { useEffect, useState } from 'react';
import DoctorCard from '../../app/components/DoctorCard';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const [doctors, setDoctors] = useState([]);
  const searchParams = useSearchParams();

  const location = searchParams.get('location') || '';
  const profession = searchParams.get('profession') || ''; // ✅ use 'profession' key

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          `https://my-backend10-780g.onrender.com/api/doctors?location=${location}&profession=${profession}`
        );
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [location, profession]);

  return (
    <div>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
}
