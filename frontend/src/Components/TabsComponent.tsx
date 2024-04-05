import React, { useEffect, useRef, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react';
import style from '../Css/TabsComponent.module.css'
import { useAppSelector } from '../Redux/Store/hook';
import { customersValueFromReduxStore } from '../Redux/CustomerReducer/reducer';

const TabsComponent = () => {

    const customers = useAppSelector(customersValueFromReduxStore);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const tabListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            
            setPhotoIndex(prevIndex => (prevIndex + 1) % 9); 
        }, 10000);

        return () => clearInterval(interval); 
    }, []);

    const shufflePhotos = (photos: string[]) => {
        // Shuffle photos array
        for (let i = photos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [photos[i], photos[j]] = [photos[j], photos[i]];
        }
        return photos;
    };

    const handleScroll = () => {
        if (tabListRef.current) {
            const scrollTop = tabListRef.current.scrollTop;
            const visibleItems = Math.floor(scrollTop / 40); // Assuming each item height is 40px
            setPhotoIndex(visibleItems * 9); // Show 10 items with every scroll
        }
    };


    
    return (
        <div>

            <h1 className={style.superHeroes}>Super Heroes</h1>
            <Tabs orientation='vertical' variant={'unstyled'} >
                <TabList className={style.tablist}
                ref={tabListRef}
                onScroll={handleScroll}

                >

                    {
                        customers.map((el) => (
                            <Tab key={el.id} style={{borderBottom: '1px solid grey'}} _selected={{ color: 'black', bg: '#E2E8F0', borderRight: '3px solid #4A5568' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <h1 className={style.heading}>{el.name}</h1>
                                    <p>{el.title.length > 150 ? `${el.title.slice(0,150)}...` : el.title}</p>
                                     
                                </div>
                            </Tab>
                        ))
                    }

                </TabList>

                <TabPanels>

                    {
                        customers.map((el) => (
                            <TabPanel className={style.tabpannelCont}>
                                <div className={`${style.customerDetail}`}>
                                    <div>
                                        <h1 className={style.heading}>{el.name}</h1>
                                        <p>{el.address}</p>
                                    </div>
                                </div>

                                <div className={`${style.gridContainer}`}>
                                    {el.title}
                                </div>

                                <div className={`${style.gridContainer}`}>

                                    
                                        <div className={`${style.tabpannels}`}>



                                            {el.photos.slice(photoIndex, photoIndex + 9).map((photo, index) => (
                                                <div key={index} className={`${style.imgCont}`} >
                                                    <img src={photo} alt="" className={style.image} />
                                                </div>
                                            ))}
                                        </div>
                                    

                                </div>
                            </TabPanel>
                        ))
                    }
                    
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComponent
