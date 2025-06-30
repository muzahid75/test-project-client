import React, { useState } from 'react';
import { createMood } from '../services/mood';
import { FaSmile, FaFrown, FaAngry, FaGrinStars } from 'react-icons/fa';

const MoodForm = ({ onSaved }) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createMood({ mood, note });
    onSaved(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Log Today’s Mood</h2>

      <div className="mb-4">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">😊 Select Mood</option>
          <option value="Happy">😊 Happy</option>
          <option value="Sad">😢 Sad</option>
          <option value="Angry">😠 Angry</option>
          <option value="Excited">🤩 Excited</option>
        </select>
      </div>

      <div className="mb-4">
        <textarea
          placeholder="📝 Write a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
      >
        💾 Save Mood
      </button>
    </form>
  );
};

export default MoodForm;
