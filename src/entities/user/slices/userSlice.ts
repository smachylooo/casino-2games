import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store';


interface IUserState {
  name:string;
  nickname:string;
}

const initialState: IUserState = {
  name: '',
  nickname: 'default nick'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
})

// export const { increment, decrement, incrementByAmount } = userSlice.actions

export const selectUSerNickname = (state: RootState) => state.user.nickname

export default userSlice.reducer