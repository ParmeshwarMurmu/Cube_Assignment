import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import style from '../Css/TabsComponent.module.css'
import { useAppSelector } from '../Redux/Store/hook';
import { customersValueFromReduxStore } from '../Redux/CustomerReducer/reducer';

const TabsComponent = () => {

    const customers = useAppSelector(customersValueFromReduxStore);
    const [photoIndex, setPhotoIndex] = useState<number>(0); 

    
    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the photo index circularly
            setPhotoIndex(prevIndex => (prevIndex + 1) % 9); // Assuming 9 photos in the grid
        }, 10000); // Change photo every 10 seconds

        return () => clearInterval(interval); // Cleanup function to clear interval
    }, []); 
    // style={{display: 'flex',}}
    // style={{border: '2px solid green', display: 'flex', flexDirection: 'column', width: '30%', textAlign: 'left'}}
    return (
        <div>
            <Tabs orientation='vertical' variant={'unstyled'} >
                <TabList className={style.tablist}>

                    {
                        customers.map((el) => (
                            <Tab key={el.id}>
                                <div style={{ textAlign: 'left' }}>
                                    <h1>Customer {el.id}</h1>
                                    <p>{el.title}</p>
                                </div>
                            </Tab>
                        ))
                    }
                    {/* <Tab >
                    <div style={{textAlign: 'left'}}>
                        <h1>Customer 01</h1>
                        <p>Lorem ipsum dolor sit amet</p>

                    </div>
                    </Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab> */}
                </TabList>

                <TabPanels className={style.tabpannels}>

                    {
                        customers.map((el) => (
                            <TabPanel>
                                <h1>customers details hers</h1>
                                <p>{el.title}</p>
                                <div>

                                    {
                                        el.photos.map((el, index) => (
                                            <div key={index} style={{ display: index === photoIndex ? 'block' : 'none' }}>
                                                <img src={el} alt="" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPanel>
                        ))
                    }
                    {/* <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel> */}
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComponent
