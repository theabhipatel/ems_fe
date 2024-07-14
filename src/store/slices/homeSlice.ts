import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  isLoggedIn: boolean;
}
const initialState: IInitialState = {
  isLoggedIn: false,
};

const homeslice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = homeslice.actions;
export default homeslice.reducer;
