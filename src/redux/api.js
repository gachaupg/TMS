import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const deleteUser = (id) => API.delete(`/stats/${id}`);

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const getMiles = () => API.get("/milestone");
export const createComplain = (formData) => API.post("/complain", formData);
export const createVacation = (formData) => API.post("/vacation", formData);
export const deleteMilestone = (id) => API.delete(`/milestone/${id}`);

export const createTour = (formData) => API.post("/project", formData);
export const getTours = () => API.get("/project");
export const getTour = (id) => API.get(`/project/${id}`);
export const deleteTour = (id) => API.delete(`/project/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/project/${id}`, updatedTourData);
  export const getProjectsByUser = (userId) => API.get(`/project/userProjects/${userId}`);
  export const getMilesByUser = (userId) => API.get(`/milestone/miles/${userId}`);
  export const createMile = (updateddata) => API.post("/milestone", updateddata);

export const getToursBySearch = (searchQuery) =>
  API.get(`/project/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);
export const  createCareTaker = (formData) => API.get('/caretaker' ,formData);
export const getCaretaker = () => API.post('/caretaker');
export const getCaretakerByUser = (userId) => API.patch('/caretaker');