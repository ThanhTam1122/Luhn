/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { generatorAsync } from './thunks';


/* Types */
export interface GeneratorSliceState {
    selectedNumbers: number[],
    generatedToken: string,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: GeneratorSliceState = {
    selectedNumbers: [],
    generatedToken: '',
    status: 'idle'
}


export const generatorSlice = createSlice({
    name: 'generator',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      pressNumber: (state, action: PayloadAction<number>) => {
        state.selectedNumbers = [...state.selectedNumbers, action.payload]
      },
  
      removeNumbers: (state) => {
        state.selectedNumbers = []
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(generatorAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(generatorAsync.fulfilled, (state, action) => {
          state.status = 'idle'
          state.generatedToken = action.payload
        })
        .addCase(generatorAsync.rejected, (state) => {
          state.status = 'failed'
        })
    }
  })
  
  
  