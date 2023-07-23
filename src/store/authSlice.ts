import IUser from '@/interfaces/IUser';
import { auth } from '@/services/firebase/firebase.config';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { RootState } from '.';

type StateType = {
  loginStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  user?: null | IUser;
};

const initialState: StateType = {
  loginStatus: 'idle',
  user: undefined,
};

/**
 * Thunk responsável por realizar login
 */
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    return userCredential.user;
  }
);

/**
 * Thunk responsável por realizar login
 */
export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await signOut(auth);
});

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setUser(state, action: PayloadAction<{ user: IUser | null }>) {
      state.user = action.payload.user;

      if (action.payload.user !== null) state.loginStatus = 'succeeded';
      else state.loginStatus = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loginStatus = 'succeeded';
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginStatus = 'failed';
      })
      .addCase(logoutUser.pending, (state) => {
        state.loginStatus = 'loading';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loginStatus = 'idle';
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loginStatus = 'succeeded';
      });
  },
});

export const { setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;

// seletores
export const selectUser = (state: RootState) => state.auth.user;
export const selectLoginStatus = (state: RootState) => state.auth.loginStatus;
