import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from './reducer'


const middleware = [
   ...getDefaultMiddleware()
];

const store:any = configureStore({
    reducer:{
        data:reducer
    },
    middleware
});

export default store;