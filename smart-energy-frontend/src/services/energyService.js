import axios from 'axios';

const API_URL = 'http://localhost:8080/api/energy';

export const getAllEnergyData = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        console.error("Error fetching energy data:", error);
        return [];
    }
};

export const addEnergyData = async (deviceName, powerUsage) => {
    try {
        await axios.post(`${API_URL}/add`, null, {
            params: { deviceName, powerUsage }
        });
    } catch (error) {
        console.error("Error adding energy data:", error);
    }
};
