import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMoviesByName = createAsyncThunk("fetchMovies", async () => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=f9033177&s=harry`
  );
  return response.json();
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByName.pending, (state, action) => {
      console.log("PENDING", state, action);
    });
    builder.addCase(fetchMoviesByName.fulfilled, (state, action) => {
      console.log("fulfilled", state, action);
    });
    builder.addCase(fetchMoviesByName.rejected, (state, action) => {
      console.log("rejected", state, action);
    });
  },
});

export default moviesSlice.reducer;
export { fetchMoviesByName };
