import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "../interfaces";

const initState: IStore = {
    posts:[
        { id:8,title: "Beutiful evening", image:"https://images.unsplash.com/photo-1611135827591-00f2daf1beec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", author:"Nino"},
        { id:7,title: "Beutiful evening", image: "https://images.unsplash.com/photo-1611135827591-00f2daf1beec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", author: "Nino" },
        { id:10,title: "Beutiful evening", image: "https://images.unsplash.com/photo-1611135827591-00f2daf1beec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", author: "Nino" },
        { id:11,title: "Beutiful evening", image: "https://images.unsplash.com/photo-1611135827591-00f2daf1beec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", author: "Nino" },
        { id:12,title: "Beutiful evening", image: "https://images.unsplash.com/photo-1611135827591-00f2daf1beec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", author: "Nino" },
    ],
    searchText: ""
};

const reducer = createSlice({
    name: "data",
    initialState: Object.assign({}, initState),
    reducers: {
        addPosts: (state, action)=>{
            state.posts.push(...action.payload);
        },
        updateSearchText: (state, action)=>{
            state.searchText = action.payload
        }
    }
});

export const {addPosts, updateSearchText} = reducer.actions;

export default reducer.reducer;