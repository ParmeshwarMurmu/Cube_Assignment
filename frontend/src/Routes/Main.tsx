import React, { useEffect } from 'react'
import TabsComponent from '../Components/TabsComponent'
import { useAppDispatch, useAppSelector } from '../Redux/Store/hook'
import { getAllCustomersData } from '../Redux/CustomerReducer/Function'
import { customersValueFromReduxStore } from '../Redux/CustomerReducer/reducer'

const Main = () => {

    const dispatch = useAppDispatch()
    
    
    
    useEffect(()=>{
     dispatch(getAllCustomersData())

    }, [])
    
  return (
    <div>
      <TabsComponent />
    </div>
  )
}

export default Main
