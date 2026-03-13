import axios from "./axios";


export const createJournal = (data) => {
  return axios.post("/journal", data);
};


export const getUserJournals = (userId) => {
  return axios.get(`/journal/${userId}`);
};


export const analyzeJournal = (text) => {
  return axios.post("/journal/analyze", { text });
};


export const getInsights = (userId) => {
  return axios.get(`/journal/insights/${userId}`);
};