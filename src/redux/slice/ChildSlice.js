import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchChildApi = createAsyncThunk('fetchApi', async()=>{
    const response= await fetch('https://extranet.who.int/whoncdspenwp/cms/json/assessment-data/61?_format=json');
    return response.json();
  
}) 



const sliceTwo=createSlice({
    name: 'ncdChild',
    initialState:{
        isLoading: true,
        data:[],
        isError:false,
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchChildApi.pending, (childState, action)=>{
            childState.isLoading= true;
        });

        builder.addCase(fetchChildApi.fulfilled, ( childState, action) => {
            childState.isLoading= false;
            childState.data=[...[action.payload]];
        });

        builder.addCase(fetchChildApi.rejected, (childState, action) => {
            console.log('Error', action.payload);
            childState.isError=true;
        });

    }
});

export default sliceTwo.reducer;