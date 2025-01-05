import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StarState {
  id: string;
  isOn: boolean;
}

interface Stars {
  // Store stars as a dictionary by `id`
  stars: Record<string, StarState>;
}

const initialState: Stars = {
  stars: {}
};

const starSlice = createSlice({
  // Consider renaming to Habits or something
  name: 'stars',
  initialState,
  reducers: {
    addStar(state, action: PayloadAction<{ id: string }>) {
      // Add a new star to the collection
      const { id } = action.payload;
      if (!state.stars[id]) {
        state.stars[id] = { id, isOn: false };
      }
    },
    toggleStar(state, action: PayloadAction<{ id: string; isOn: boolean }>) {
      // Toggle a star's `isOn` state
      const { id, isOn } = action.payload;
      // if (state.stars[id]) {
      // state.stars[id].isOn = isOn;
      state.stars[id] = { id, isOn: isOn };
    },
    removeStar(state, action: PayloadAction<{ id: string }>) {
      // Remove a star from the collection
      const { id } = action.payload;
      delete state.stars[id];
    },
  },
});

export const { toggleStar, addStar, removeStar } = starSlice.actions;
export default starSlice.reducer;
