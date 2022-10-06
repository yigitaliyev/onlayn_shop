import { createSlice } from '@reduxjs/toolkit'
import * as Image from '../companents/img'



const qatlam = createSlice({
    name: "qator",

    initialState: {
        category: [
            {
                title: "Servis anjomlari",
                id: 2,
                img: Image.Servis,
            },
          
        ]
    },
    reducers: {

    }

})

export default qatlam.reducer