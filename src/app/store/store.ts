import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postSlice";
import likesSlice from "./slices/likeSlice";
import textpostSlice from "./slices/textpostSlice";
import postlikesSlice from "./slices/postlikeSlice";
export const store = configureStore({
    reducer: {
        posts: postsSlice,
        likes: likesSlice,
        textsposts:textpostSlice,
        postlikes:postlikesSlice,
    }
})