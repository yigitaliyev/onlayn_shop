import { configureStore } from '@reduxjs/toolkit'
import qatlam from './qatlam'
import qatlam2 from './qatlam2'

export const store = configureStore({
  reducer: {
    todos: qatlam,
    cart: qatlam2
  },
})