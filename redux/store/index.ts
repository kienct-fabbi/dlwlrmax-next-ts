import { configureStore } from '@reduxjs/toolkit';
import mouseStateReducer from '../features/mouseStates';
import loadingStateReducer from '../features/loadingStates';
export default configureStore({
  reducer: {
    mouseState: mouseStateReducer,
    loadingState: loadingStateReducer
  }
});
