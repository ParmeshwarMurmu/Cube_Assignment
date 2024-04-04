import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store/store";


// Define the interface 


interface customersItems {
    id: number,
    name:string,
    title: string,
    address: string,
    photos: string[]

}

interface rootState {
    customers: customersItems[],
    isLoading: boolean,
    isError: boolean
}

const initialState : rootState = {
    customers: [],
    isLoading: false,
    isError: true
}


export const customersSlice = createSlice({
    name: 'customersSliceName',
    initialState,

    reducers: {
        customersIsLoadingAction: (state, action: PayloadAction<boolean>)=>{
            state.isLoading = action.payload;
        },

        customersIsEorrAction: (state, action: PayloadAction<boolean>)=>{
            state.isError = action.payload;
        },

        customersSuccessAction: (state, action: PayloadAction<customersItems[]>) =>{
            state.customers = action.payload;
        },
    }
})


export const { customersIsLoadingAction, customersIsEorrAction, customersSuccessAction } = customersSlice.actions
export const customersIsLoadingValueFromReduxStore = (state: RootState) => state.customersSliceName.isLoading;
export const customersIsErrorValueFromReduxStore = (state: RootState) => state.customersSliceName.isError;
export const customersValueFromReduxStore = (state: RootState) => state.customersSliceName.customers;


export default customersSlice.reducer




