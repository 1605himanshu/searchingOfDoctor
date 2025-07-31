'use client';
import { useEffect, useState } from 'react';
import DoctorCard from '../../app/components/DoctorCard';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const searchParams = useSearchParams();

  const location = searchParams.get('location') || '';
  const profession = searchParams.get('profession') || '';

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true); // 👈 start loading
        const res = await fetch(
          `https://my-backend5.onrender.com/api/doctors?location=${location}&profession=${profession}`
        );
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false); // 👈 stop loading
      }
    };

    fetchDoctors();
  }, [location, profession]);

  return (
    <div className="min-h-screen bg-white px-4 md:px-10 py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {loading ? (
          <p className="text-center text-gray-600 w-full">Loading doctors...</p> // 👈 new
        ) : doctors.length > 0 ? (
          doctors.map((doctor) => (
            <div key={doctor._id} className="w-full sm:w-[22rem]">
              <DoctorCard doctor={doctor} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 w-full">
            No doctors found for your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}
