import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flightList: [],
    passengers: [],
    packimages: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    storeFlightDetail: (state, action) => {
        state.flightList = action.payload
    },
    storePassenger: (state, action) => {
        state.passenger = action.payload
    },
    storePackageImages: (state, action) => {
      state.packimages = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { storeFlightDetail, storePassenger, storePackageImages } = counterSlice.actions

export default counterSlice.reducer