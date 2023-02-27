import { createAsyncThunk } from '@reduxjs/toolkit'
import fetchAPI from '../../lib/fetchApi'

const getMeals = createAsyncThunk(
  'meals/getMeals',
  // eslint-disable-next-line consistent-return
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await fetchAPI('foods')
      return data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
export default getMeals
