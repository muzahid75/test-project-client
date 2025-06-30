import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  getTodayMood,
  getWeeklySummary,
  getStreakCount,
} from '../services/mood';
import MoodForm from '../components/MoodForm';
import MoodChart from '../components/MoodChart';
import StreakBadge from '../components/StreakBadge';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user } = useAuth();
  const [todayMood, setTodayMood] = useState(null);
  const [summary, setSummary] = useState([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const [today, week, streakCount] = await Promise.all([
          getTodayMood(),
          getWeeklySummary(),
          getStreakCount(),
        ]);
        setTodayMood(today);
        setSummary(week);
        setStreak(streakCount);
        toast.success('🌟 Dashboard loaded successfully!');
      } catch (err) {
        toast.error('⚠️ Failed to load dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-600">
        Loading dashboard...
      </div>
    );

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Welcome, {user?.phone}
      </h1>

      {todayMood ? (
        <motion.div
          className="mb-6 bg-blue-50 p-4 rounded-lg shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-lg font-semibold text-blue-700 mb-1">Today's Mood:</h2>
          <p className="text-xl font-medium">{todayMood.mood}</p>
          {todayMood.note && (
            <p className="text-gray-600 mt-2 italic">"{todayMood.note}"</p>
          )}
        </motion.div>
      ) : (
        <MoodForm
          onSaved={(newMood) => {
            setTodayMood(newMood);
            toast.success('😊 Mood logged successfully!');
          }}
        />
      )}

      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          📊 Weekly Mood Summary
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <MoodChart summary={summary} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <StreakBadge streak={streak} />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
