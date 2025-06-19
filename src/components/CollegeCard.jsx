import React from 'react';

const typeColors = {
  IIT: 'bg-blue-700',
  NIT: 'bg-green-700',
  IIIT: 'bg-purple-700',
  BITS: 'bg-yellow-700 text-gray-900',
};

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-3 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 animate-fade-in">
      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[college.type] || 'bg-gray-700'}`}>{college.type}</span>
        <span className="ml-auto text-sm text-gray-400">{college.state}, {college.city}</span>
      </div>
      <h2 className="text-xl font-bold mb-1">{college.name}</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {college.branches.map((branch) => (
          <span key={branch} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
            {branch}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard; 