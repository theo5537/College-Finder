import React, { useMemo } from 'react';

const TYPES = ['IIT', 'NIT', 'IIIT', 'BITS'];

const FilterPanel = ({ filters, onChange, colleges }) => {
  // Get unique states and branches from colleges
  const states = useMemo(() => Array.from(new Set(colleges.map(c => c.state))).sort(), [colleges]);
  const cities = useMemo(() => {
    if (!filters.state) return [];
    return Array.from(new Set(colleges.filter(c => c.state === filters.state).map(c => c.city))).sort();
  }, [colleges, filters.state]);
  const branches = useMemo(() => Array.from(new Set(colleges.flatMap(c => c.branches))).sort(), [colleges]);

  const handleTypeChange = (type) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    onChange({ types: newTypes });
  };

  const handleStateChange = (e) => {
    onChange({ state: e.target.value, city: '' });
  };

  const handleCityChange = (e) => {
    onChange({ city: e.target.value });
  };

  const handleBranchChange = (branch) => {
    const newBranches = filters.branches.includes(branch)
      ? filters.branches.filter(b => b !== branch)
      : [...filters.branches, branch];
    onChange({ branches: newBranches });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center animate-fade-in">
      {/* Institute Type Multi-select */}
      <div className="flex gap-2">
        {TYPES.map(type => (
          <button
            key={type}
            type="button"
            onClick={() => handleTypeChange(type)}
            className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-150 focus:outline-none ${filters.types.includes(type) ? 'bg-blue-600 border-blue-400' : 'bg-gray-700 border-gray-600 hover:bg-gray-600'}`}
          >
            {type}
          </button>
        ))}
      </div>
      {/* State Dropdown */}
      <select
        value={filters.state}
        onChange={handleStateChange}
        className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">State</option>
        {states.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      {/* City Dropdown */}
      <select
        value={filters.city}
        onChange={handleCityChange}
        disabled={!filters.state}
        className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-xs focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
      >
        <option value="">City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      {/* Branch Multi-select */}
      <div className="flex gap-2 flex-wrap">
        {branches.map(branch => (
          <button
            key={branch}
            type="button"
            onClick={() => handleBranchChange(branch)}
            className={`px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-150 focus:outline-none ${filters.branches.includes(branch) ? 'bg-green-600 border-green-400' : 'bg-gray-700 border-gray-600 hover:bg-gray-600'}`}
          >
            {branch}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel; 