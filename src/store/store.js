import { configureStore } from '@reduxjs/toolkit'
import qatlam from './qatlam'

export const store = configureStore({
  reducer: {
    todos: qatlam,
  },
})