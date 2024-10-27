import axios from 'axios';

const API_URL = 'http://localhost:8080/vehicles';

const getVehicles = () => {
    return axios.get(API_URL);
};

const rentVehicle = (licensePlate) => {
    return axios.post(`${API_URL}/${licensePlate}/rent`);
};

const returnVehicle = (licensePlate) => {
    return axios.post(`${API_URL}/${licensePlate}/return`);
};

export default {
    getVehicles,
    rentVehicle,
    returnVehicle,
};
