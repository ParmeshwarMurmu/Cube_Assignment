import React, { useEffect } from 'react'
import TabsComponent from '../Components/TabsComponent'
import { useAppDispatch, useAppSelector } from '../Redux/Store/hook'
import { getAllCustomersData } from '../Redux/CustomerReducer/Function'
import { customersIsLoadingValueFromReduxStore, customersValueFromReduxStore } from '../Redux/CustomerReducer/reducer'
import { Spinner } from '@chakra-ui/react';

import style from '../Css/TabsComponent.module.css'

const Main = () => {

  const dispatch = useAppDispatch();
  const loading = useAppSelector(customersIsLoadingValueFromReduxStore)



  useEffect(() => {
    dispatch(getAllCustomersData())

  }, [])

  return (
    <div>
      {
        loading ? <div className={style.loading}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </div> : <TabsComponent />
      }
      
    </div>
  )
}

export default Main
