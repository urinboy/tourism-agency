import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/bookings";

export const getBookings = async (token) => {
    const response = await axios.get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const createBooking = async (bookingData, token) => {
    const response = await axios.post(`${API_URL}`, bookingData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const cancelBooking = async (id, token) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
