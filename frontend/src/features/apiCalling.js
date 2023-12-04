import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/user/findAllUser/40", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchData2 = createAsyncThunk("api/fetchData2", async (id) => {
  try {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:5000/user/getUser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const fetchData3 = createAsyncThunk("api/fetchData3", async () => {
  // Add logic for fetchData3 here
});

const initialState = {
  data: [],
  selfData: [],
  status: "idle",
  error: null,
};

export const fetchApi = createSlice({
  name: "Api fetching",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchData2.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData2.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selfData = action.payload;
      })
      .addCase(fetchData2.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchData3.pending, (state) => {
        // Handle fetchData3 pending
      })
      .addCase(fetchData3.fulfilled, (state, action) => {
        // Handle fetchData3 fulfilled
      })
      .addCase(fetchData3.rejected, (state, action) => {
        // Handle fetchData3 rejected
      });
  },
});

export default fetchApi.reducer;
