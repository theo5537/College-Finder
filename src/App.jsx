import React from 'react';
import CollegeCard from './components/CollegeCard';
import mockColleges from './data/mockColleges';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">College Finder</h1>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mockColleges.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 animate-fade-in">
              No colleges available
            </div>
          ) : (
            mockColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
