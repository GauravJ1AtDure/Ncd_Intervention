import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ncdReducer from './slice/Slice';
import ncdChildReducer from './slice/ChildSlice';


/*const rootReducer= combineReducers({

    ncdReducer,
    ncdChildReducer,

})

export const store = configureStore({ reducer: rootReducer })*/

export const store = configureStore({
    reducer:{
        ncd:ncdReducer,
        ncdChild:ncdChildReducer,
    }
})