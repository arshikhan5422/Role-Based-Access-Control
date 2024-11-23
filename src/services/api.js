import axios from 'axios';

// Set up the base URL for your API
const API_URL = 'http://localhost:5000/users';  // Replace with your actual API endpoint

// Function to fetch users
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};

// Function to add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user: ", error);
    throw error;
  }
};

// Function to update an existing user
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user: ", error);
    throw error;
  }
};

// Function to delete a user
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting user: ", error);
    throw error;
  }
};
