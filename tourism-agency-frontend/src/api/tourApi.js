import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tours";

export const getTours = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

export const getTourById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createTour = async (tourData, token) => {
    const response = await axios.post(`${API_URL}`, tourData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const deleteTour = async (id, token) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
