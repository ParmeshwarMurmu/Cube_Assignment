import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import style from '../Css/TabsComponent.module.css'

const TabsComponent = () => {
    // style={{display: 'flex',}}
    // style={{border: '2px solid green', display: 'flex', flexDirection: 'column', width: '30%', textAlign: 'left'}}
    return (
        <div>
            <Tabs orientation='vertical' variant={'unstyled'} >
                <TabList className={style.tablist}>
                    <Tab >
                    <div style={{textAlign: 'left'}}>
                        <h1>Customer 01</h1>
                        <p>Lorem ipsum dolor sit amet</p>

                    </div>
                    </Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels className={style.tabpannels}>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComponent
