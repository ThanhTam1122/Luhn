/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchTokenVerify } from './fetchTokenVerify'


export const verifyAsync = createAppAsyncThunk(
    'generator/fetchTokenVerify',
    async (token: string) => {
      const response = await fetchTokenVerify(token)
  
      // The value we return becomes the `fulfilled` action payload
      return response.data
    }
  )