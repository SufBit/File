import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import { combineReducers } from 'redux'; // Optional, only if you have multiple reducers
import { userLoginReducer } from './reducers/userReducers';
import { userRegisterReducer , userUpdateReducer} from './reducers/userReducers';
import { noteCreateReducer, noteListReducer, noteUpdateReducer, noteDeleteReducer } from './reducers/notesReducer';

// Combine reducers (if needed)
const reducer = combineReducers({
    // Add your reducers here, e.g., exampleReducer: exampleSlice.reducer
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer, 
    noteDelete: noteDeleteReducer,
});
const userInforFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
    userLogin: { userInfo: userInforFromStorage },
}; // Define an initial state if needed

// Create a Redux store
const store = configureStore({
    reducer, // Pass your reducers here
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in non-production environments
    // Middleware is automatically included, but you can customize it:
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState: initialState, // Add initialState here
});

export default store;
