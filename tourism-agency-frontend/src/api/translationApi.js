import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/translations";

export const getTranslations = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

export const updateTranslation = async (id, translationData, token) => {
    const response = await axios.put(`${API_URL}/${id}`, translationData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
