/* Core */
import { createSlice } from '@reduxjs/toolkit'
import { verifyAsync } from './thunks';


/* Types */
export interface VerifySliceState {
  verifyToken: string,
  status: 'idle' | 'loading' | 'failed';
}

const initialState: VerifySliceState = {
  verifyToken: '',
  status: 'idle'
}


export const verifySlice = createSlice({
  name: 'verify',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(verifyAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.verifyToken = action.payload
      })
      .addCase(verifyAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})


