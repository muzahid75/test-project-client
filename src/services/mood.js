// src/services/mood.js

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const token = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token()}`,
});

export const createMood = async (body) => {
  const res = await fetch(`${API}/mood`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(body),
  });
  return res.json();
};

export const getTodayMood = async () => {
  const res = await fetch(`${API}/mood/today`, {
    headers: headers(),
  });
  return res.json();
};

export const getWeeklySummary = async () => {
  const res = await fetch(`${API}/mood/weekly-summary`, {
    headers: headers(),
  });
  return res.json();
};

export const getStreakCount = async () => {
  const res = await fetch(`${API}/mood/streak`, {
    headers: headers(),
  });
  return res.json();
};

export const getMoods = async (start = '', end = '') => {
  const query = new URLSearchParams({ start, end }).toString();
  const res = await fetch(`${API}/mood?${query}`, {
    headers: headers(),
  });
  return res.json();
};

export const deleteMood = async (id) => {
  await fetch(`${API}/mood/${id}/soft-delete`, {
    method: 'PATCH',
    headers: headers(),
  });
};

export const restoreMood = async (id) => {
  await fetch(`${API}/mood/${id}/restore`, {
    method: 'PATCH',
    headers: headers(),
  });
};
