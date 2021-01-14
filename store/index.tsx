import { configureStore , getDefaultMiddleware, createReducer} from "@reduxjs/toolkit";

const middleware = [
   ...getDefaultMiddleware()
];

const initState = {

};

const reducer = createReducer(initState,{});

const store:any = configureStore({
    reducer:{
        data: reducer
    },
    middleware
});

export default store;