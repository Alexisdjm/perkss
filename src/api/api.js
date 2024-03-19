import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
export const preregister = async (data) => {
    const response = await axios.post(`${API_URL}/app/auth/preregister`, data);
    return response;
}

export const qrScanned = async (jwt) => {
    const response = await axios.post(`${API_URL}/app/qr/scanned`, { origin: 'web', jwt})
    return response;
}