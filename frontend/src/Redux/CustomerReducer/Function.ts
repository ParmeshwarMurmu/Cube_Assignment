import { Dispatch } from "redux"
import { customersIsEorrAction, customersIsLoadingAction, customersSuccessAction } from "./reducer"
import axios from "axios"
import { APP_URL, CUSTOMERS_ENDPOINT } from "../../Constants/constants"


export const getAllCustomersData = ()=>(dispatch: Dispatch<any>)=>{
    
    console.log("***");
    
    dispatch(customersIsLoadingAction(true))
    axios.get(`${APP_URL}${CUSTOMERS_ENDPOINT}`)
    .then((res)=>{
        console.log(res);
        dispatch(customersIsLoadingAction(false))
        dispatch(customersSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(customersIsEorrAction(true))
    })

}