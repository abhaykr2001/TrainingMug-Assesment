import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhotoPost {
    id: number;
    title: string;
    url: string;
}

// Load saved photo posts from local storage or initialize with an empty array
const savedPhotos = JSON.parse(localStorage.getItem('savedPhotos') || '[]');

const initialState: PhotoPost[] = savedPhotos;

const photopostSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotoPost(state, action: PayloadAction<PhotoPost>) {
            console.log("Adding photo post:", action.payload);
            state.push(action.payload);
            // Update local storage with the updated photo posts array
            localStorage.setItem('savedPhotos', JSON.stringify(state));
        },
        deletePhotoPost(state, action: PayloadAction<number>) {
            console.log("Deleting photo post with ID:", action.payload);
            const postIdToDelete = action.payload;
            const updatedPhotoPosts = state.filter(post => post.id !== postIdToDelete);
            // Update local storage with the updated photo posts array
            localStorage.setItem('savedPhotos', JSON.stringify(updatedPhotoPosts));
            // Return the new state
            return updatedPhotoPosts;
        }
    }
});

export const { addPhotoPost, deletePhotoPost } = photopostSlice.actions;

export default photopostSlice.reducer;