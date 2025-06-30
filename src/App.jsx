import React, { useState, useMemo } from 'react';
import FilterPanel from './components/FilterPanel';
import CollegeCard from './components/CollegeCard';
import mockColleges from './data/mockColleges';

const App = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    types: [],
    state: '',
    city: '',
    branches: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredColleges = useMemo(() => {
    return mockColleges.filter((college) => {
      const matchesSearch = college.name.toLowerCase().includes(search.toLowerCase());
      const matchesType =
        filters.types.length === 0 || filters.types.includes(college.type);
      const matchesState =
        !filters.state || college.state === filters.state;
      const matchesCity =
        !filters.city || college.city === filters.city;
      const matchesBranch =
        filters.branches.length === 0 ||
        filters.branches.some((b) => college.branches.includes(b));
      return (
        matchesSearch && matchesType && matchesState && matchesCity && matchesBranch
      );
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">College Finder</h1>
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search colleges by name..."
            value={search}
            onChange={handleSearchChange}
            className="w-full md:w-1/2 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <FilterPanel filters={filters} onChange={handleFilterChange} colleges={mockColleges} />
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 animate-fade-in">
              No colleges found
            </div>
          ) : (
            filteredColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App; 