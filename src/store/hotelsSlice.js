import { createSlice } from '@reduxjs/toolkit';
import { hotels } from '../data/hotels';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: hotels,
  reducers: {
    // payload = a new hotel object (it must already have an id)
    addHotel(state, action) {
      state.push(action.payload);
    },

    // payload = the whole updated hotel
    updateHotel(state, action) {
      return state.map((hotel) =>
        hotel.id === action.payload.id ? action.payload : hotel
      );
    },

    // payload = the id of the hotel to remove
    deleteHotel(state, action) {
      return state.filter((hotel) => hotel.id !== action.payload);
    },
  },
});

export const { addHotel, updateHotel, deleteHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;