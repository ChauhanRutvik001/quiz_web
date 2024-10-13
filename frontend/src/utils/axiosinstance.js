import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: `https://quiz-web-7h64.onrender.com`, // Set the base URL",
  withCredentials: true,  // To send cookies if needed (depending on your setup)
  headers: {
    'Content-Type': 'application/json'
  }
});


export default axiosInstance;
