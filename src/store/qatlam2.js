import { createSlice, current } from '@reduxjs/toolkit'

const  initialState = {
    cart: [],
     
}

export  const qatlam2 = createSlice({
    
    name: "qatlam2",
    initialState,
    reducers: {
        addCart: (state , {payload}) => {
                        
            state.cart.push(payload)
            console.log(payload)
        }  
    },

})

export const { addCart } = qatlam2.actions

export default qatlam2.reducer