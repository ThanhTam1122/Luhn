/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchTokenGenerator } from './fetchTokenGenerator'


export const generatorAsync = createAppAsyncThunk(
    'generator/fetchTokenGenerator',
    async (pads: number[]) => {
      const response = await fetchTokenGenerator(pads)
  
      // The value we return becomes the `fulfilled` action payload
      return response.data
    }
  )