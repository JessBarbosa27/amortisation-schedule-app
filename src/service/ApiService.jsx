import axios from "axios";

const API_URL = "http://localhost:9001/v1";

export const createAmortizationSchedule = async (loanDetails) => {
  const response = await axios.post(
    `${API_URL}/amortization-schedule`,
    loanDetails
  );
  return response.data;
};

export const getAmortizationsByScheduleId = async (id) => {
  const response = await axios.get(`${API_URL}/amortizations/${id}`);
  return response.data;
};

export const getAmortizationSchedules = async () => {
  const response = await axios.get(`${API_URL}/amortization-schedules`);
  return response.data;
};
