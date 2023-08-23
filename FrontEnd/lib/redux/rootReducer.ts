/* Instruments */
import { counterSlice } from './slices'
import { generatorSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  generator: generatorSlice.reducer
}
