import axios from 'axios';

export const API_URL = 'http://localhost:8080/vehicles';

const rentVehicle = (licensePlate) => {
    return axios.post(`${API_URL}/${licensePlate}/rent`);
};

const returnVehicle = (licensePlate) => {
    return axios.post(`${API_URL}/${licensePlate}/return`);
};

export default {
    rentVehicle,
    returnVehicle,
};
