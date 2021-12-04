import { configureStore } from '@reduxjs/toolkit';
import mouseStateReducer from '../features/mouseStates';
export default configureStore({
  reducer: {
    mouseState: mouseStateReducer
  }
});
