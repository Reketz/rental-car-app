import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vehicles';

const getVehicles = () => {
    return axios.get(API_URL);
};

const rentVehicle = (vehicleId) => {
    return axios.post(`${API_URL}/${vehicleId}/rent`);
};

const returnVehicle = (rentalId) => {
    return axios.post(`${API_URL}/return/${rentalId}`);
};

export default {
    getVehicles,
    rentVehicle,
    returnVehicle,
};
