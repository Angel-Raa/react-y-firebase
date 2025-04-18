import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth/authSlice";
import { journalSice } from "./slice/journal/journalSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal:journalSice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
