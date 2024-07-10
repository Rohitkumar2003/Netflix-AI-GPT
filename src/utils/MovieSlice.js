import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice ( {
    name:"movies",
    initialState: {
        NowPlayingMovies:null,
        addTrailerVideo:null,

    },
    reducers:{ 
        addNowPlayingMovies : (state, action)=> {
            state.NowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=> {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo:(state,action)=> {
            state.addTrailerVideo = action.payload;
        },
        // addTopRatedMovies:(state,action)=> {
        //     state.TopRatedMovies = action.payload;
        // }

    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;