import React from 'react';
import MemberCard from '../components/MemberCard';

const HomePage = () => {
  const members = [
    "RUKA", "PHARITA", "ASA", "AHYEON", "RAMI", "RORA", "CHIQUITA"
  ];

  return (
    <div className="min-h-screen bg-black text-purple-400 flex flex-col items-center justify-center p-4 selection:bg-pink-500 selection:text-black">
      <h1
        className="text-6xl font-bold mb-12 text-center"
        style={{ fontFamily: "'Orbitron', sans-serif" }} // Placeholder for a techno font
      >
        CHOOSE YOUR MONSTER!!
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4">
        {members.map((name) => (
          <MemberCard key={name} memberName={name} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
