import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/payments";

export const getPayments = async (token) => {
    const response = await axios.get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const createPayment = async (paymentData, token) => {
    const response = await axios.post(`${API_URL}`, paymentData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
