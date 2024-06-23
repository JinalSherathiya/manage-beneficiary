import { configureStore, createSlice } from '@reduxjs/toolkit';

const beneficiariesSlice = createSlice({
  name: 'beneficiaries',
  initialState: [],
  reducers: {
    addBeneficiary: (state, action) => {
      state.push(action.payload);
    },
    updateBeneficiary: (state, action) => {
      const index = state.findIndex(b => b.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeBeneficiary: (state, action) => {
      return state.filter(b => b.id !== action.payload);
    }
  }
});

export const { addBeneficiary, updateBeneficiary, removeBeneficiary } = beneficiariesSlice.actions;

const store = configureStore({
  reducer: {
    beneficiaries: beneficiariesSlice.reducer
  }
});

export default store;