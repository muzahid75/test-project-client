// src/components/StreakBadge.jsx
import React from 'react';

const StreakBadge = ({ streak }) => {
  if (streak < 3) return null;

  return (
    <div className="bg-yellow-100 text-yellow-800 font-medium py-2 px-4 rounded shadow text-center">
      🔥 Streak Badge: {streak} days in a row!
    </div>
  );
};

export default StreakBadge;
