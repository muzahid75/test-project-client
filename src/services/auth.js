// src/services/auth.js

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const loginUser = async (phone, password) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
};

export const registerUser = async (phone, password) => {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password }),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
};

export const getUserProfile = async (token) => {
  const res = await fetch(`${API}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
};

export const logoutUser = () => {
  // Optional: call API to invalidate token on server if implemented
  // For now, client just removes token from localStorage
};
