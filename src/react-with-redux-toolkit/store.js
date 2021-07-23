import { configureStore } from '@reduxjs/toolkit'
import customisableComponentsSlice  from './components/customisableComponentsSlice'

export const store = configureStore({
  reducer: {
    customisableComponents: customisableComponentsSlice
  },
})
