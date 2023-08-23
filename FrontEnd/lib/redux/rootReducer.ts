/* Instruments */
import { generatorSlice } from './slices'
import { verifySlice } from './slices'

export const reducer = {
  generator: generatorSlice.reducer,
  verify: verifySlice.reducer
}
