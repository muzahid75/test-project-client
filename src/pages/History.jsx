import React, { useEffect, useState } from 'react';
import { getMoods, deleteMood, restoreMood } from '../services/mood';
import DateRangeFilter from '../components/DateRangeFilter';
import { motion } from 'framer-motion';

const History = () => {
  const [moods, setMoods] = useState([]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const fetchData = async () => {
    const data = await getMoods(start, end);
    setMoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteMood(id);
    fetchData();
  };

  const handleRestore = async (id) => {
    await restoreMood(id);
    fetchData();
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📝 Mood History
      </h2>

      <div className="mb-6">
        <DateRangeFilter
          start={start}
          end={end}
          onStartChange={setStart}
          onEndChange={setEnd}
          onFilter={fetchData}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-800">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-800">Mood</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-800">Note</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-blue-800">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {moods.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No mood entries found.
                </td>
              </tr>
            )}
            {moods.map((mood) => (
              <tr key={mood._id} className={mood.isDeleted ? 'bg-red-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(mood.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{mood.mood}</td>
                <td className="px-6 py-4">{mood.note || '-'}</td>
                <td className="px-6 py-4">
                  {mood.isDeleted ? (
                    <button
                      onClick={() => handleRestore(mood._id)}
                      className="text-green-600 font-medium hover:underline"
                    >
                      Restore
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDelete(mood._id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default History;
