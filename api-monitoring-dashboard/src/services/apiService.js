import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchDashboardData = async () => {
  // In a real app, this would be an actual API call
  return {
    responseTimes: [
      { name: '00:00', value: 120 },
      { name: '04:00', value: 200 },
      { name: '08:00', value: 150 },
      { name: '12:00', value: 350 },
      { name: '16:00', value: 280 },
      { name: '20:00', value: 180 },
    ],
    statusCodes: [
      { name: '200 OK', value: 1200 },
      { name: '404 Not Found', value: 45 },
      { name: '500 Error', value: 12 },
      { name: 'Other', value: 23 },
    ],
    endpointTraffic: [
      { name: '/api/users', requests: 450 },
      { name: '/api/products', requests: 320 },
      { name: '/api/orders', requests: 280 },
      { name: '/api/auth', requests: 150 },
    ]
  };
};
export const fetchAnomalies = async (timeRange = '24h') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/anomalies`, {
      params: { range: timeRange }
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch anomalies')
  }
}

