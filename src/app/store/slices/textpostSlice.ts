import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextPost {
    id: number;
    title: string;
    body: string;
}

// Load saved posts from local storage or initialize with an empty array
const savedTexts = JSON.parse(localStorage.getItem('savedTexts') || '[]');

const initialState: TextPost[] = savedTexts;

const textpostSlice = createSlice({
    name: 'textsposts',
    initialState,
    reducers: {
        addTextPost(state, action: PayloadAction<TextPost>) {
            console.log("Adding post:", action.payload);
            state.push(action.payload);
            // Update local storage with the updated posts array
            localStorage.setItem('savedTexts', JSON.stringify(state));
        },
        deletePost(state, action: PayloadAction<number>) {
            console.log("Deleting post with ID:", action.payload);
            const postIdToDelete = action.payload;
            const updatedTextPosts = state.filter(post => post.id !== postIdToDelete);
            // Update local storage with the updated posts array
            localStorage.setItem('savedTexts', JSON.stringify(updatedTextPosts));
            // Return the new state
            // return updatedTextPosts;
        }
        
        // Define other reducers as needed
    }
});

export const { addTextPost , deletePost } = textpostSlice.actions;

export default textpostSlice.reducer;