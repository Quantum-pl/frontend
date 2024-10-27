import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 5000
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await axios.post('http://localhost:3000/api/auth/refresh', { token: refreshToken });
        localStorage.setItem('authToken', data.token);
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return apiClient(originalRequest);
      } catch (error) {
        console.error('Token refresh error:', error);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;