// src/components/DateRangeFilter.jsx
import React from 'react';

const DateRangeFilter = ({ start, end, onStartChange, onEndChange, onFilter }) => {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="date"
        value={start}
        onChange={(e) => onStartChange(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={end}
        onChange={(e) => onEndChange(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={onFilter}
        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
      >
        Filter
      </button>
    </div>
  );
};

export default DateRangeFilter;
