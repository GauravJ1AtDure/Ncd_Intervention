import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchApi = createAsyncThunk('fetchApi', async()=>{
    const response= await fetch('https://extranet.who.int/whoncdspenwp/cms/json/intervention-child/8?_format=json');
    return response.json();
}) 

const sliceOne=createSlice({
    name: 'ncd',
    initialState:{
        isLoading: true,
        data:null,
        isError:false,
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchApi.pending, (state, action)=>{
            state.isLoading= true;
        });

        builder.addCase(fetchApi.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data=action.payload;
        });

        builder.addCase(fetchApi.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError=true;
        });


    }
});




export default sliceOne.reducer;
