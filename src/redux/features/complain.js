import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'
import { toast } from "react-toastify";
import axios from "axios";
import { url,setHeaders } from "./api";

export const createComplain = createAsyncThunk(
  "projects/createComplain",
  async (values) => {
    try {
      const response = await api.createComplain(values)

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
// export const getProjects = createAsyncThunk(
//   "project/getProject",
//   async (_, {rejectWithValue}) => {
//     try {
//       const response = await api.getprojects()
//         return response.data;
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data);
//     }
//   }
// );
export const getProjectsByUser = createAsyncThunk(
  "tour/getProjectsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getProjectsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const getTours = createAsyncThunk(
  "tour/getTours",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getTours(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTour = createAsyncThunk(
  "tour/getTour",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getTour(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteComplain = createAsyncThunk(
  "tour/deleteComplain",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteComplain(id);
      toast.success("Tour Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateTour = createAsyncThunk(
  "tour/updateTour",
  async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateTour(updatedTourData, id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchTours = createAsyncThunk(
  "tour/searchTours",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getToursBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getToursByTag = createAsyncThunk(
  "tour/getToursByTag",
  async (tag, { rejectWithValue }) => {
    try {
      const response = await api.getTagTours(tag);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRelatedTours = createAsyncThunk(
  "tour/getRelatedTours",
  async (tags, { rejectWithValue }) => {
    try {
      const response = await api.getRelatedTours(tags);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

  const complainSlice = createSlice({
    name: "project",
    initialState: {
      tour: {},
      tours: [],
      userTours: [],
      tagTours: [],
      relatedTours: [],
      currentPage: 1,
      numberOfPages: null,
      error: "",
      loading: false,
      projec:{},
      project:[],
      projects:[],
      projec:[],
      // userProjects:[],
      error: "",
      loading: false,
    },
    reducers: {
    //   setUser: (state, action) => {
    //     state.user = action.payload;
    //   },
    //   setLogout: (state, action) => {
    //     localStorage.clear();
    //     state.user = null;
    //   },
    },
    extraReducers: {
      [createComplain.pending]: (state, action) => {
        state.loading = true;
      },
      [createComplain.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [createComplain.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      // [getProjects.pending]: (state, action) => {
      //   state.loading = true;
      // },
      // [getProjects.fulfilled]: (state, action) => {
      //   state.loading = false;
      //   state.project = action.payload;
      // },
      // [getProjects.rejected]: (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload.message;
      // },
      [getProjectsByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getProjectsByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      },
      [getProjectsByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getTours.pending]: (state, action) => {
        state.loading = true;
      },
      [getTours.fulfilled]: (state, action) => {
        state.loading = false;
        state.tours = action.payload.data;
        
      },
      [getTours.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getTour.pending]: (state, action) => {
        state.loading = true;
      },
      [getTour.fulfilled]: (state, action) => {
        state.loading = false;
        state.tour = action.payload;
      },
      [getTour.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [deleteComplain.pending]: (state, action) => {
        state.loading = true;
      },
      [deleteComplain.fulfilled]: (state, action) => {
        state.loading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.userTours = state.userTours.filter((item) => item._id !== id);
          state.tours = state.tours.filter((item) => item._id !== id);
        }
      },
      [deleteComplain.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [updateTour.pending]: (state, action) => {
        state.loading = true;
      },
      [updateTour.fulfilled]: (state, action) => {
        state.loading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.userTours = state.userTours.map((item) =>
            item._id === id ? action.payload : item
          );
          state.tours = state.tours.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      },
      [updateTour.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    
    
    },
  });
  export default complainSlice.reducer;