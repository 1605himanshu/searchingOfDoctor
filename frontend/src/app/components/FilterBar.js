// components/FilterBar.js
'use client';

export default function FilterBar() {
  return (
    <div className="flex flex-wrap gap-4 items-center border-b pb-4">
      <select className="border rounded px-3 py-2">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Patient Stories</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>Experience</option>
      </select>
      <select className="border rounded px-3 py-2">
        <option>All Filters</option>
      </select>
      <select className="ml-auto border rounded px-3 py-2">
        <option>Sort By: Relevance</option>
        <option>Experience</option>
        <option>Fee: Low to High</option>
      </select>
    </div>
  );
}
