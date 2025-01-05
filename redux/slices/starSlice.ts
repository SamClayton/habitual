import { createSlice } from '@reduxjs/toolkit';

interface StarState {
  isOn: boolean;
}

const initialState: StarState = {
  isOn: false,
};

const starSlice = createSlice({
  name: 'star',
  initialState,
  reducers: {
    toggleStar(state, action) {
      state.isOn = action.payload;
    },
  },
});

export const { toggleStar } = starSlice.actions;
export default starSlice.reducer;
