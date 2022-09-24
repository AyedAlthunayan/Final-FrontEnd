import React, { createContext, useState, useEffect } from 'react';
import Dataservices from './Dataservices';


export const DataContext = createContext();

export const DataProvider = (props) => {
    const [currentUser,setCurrentUser] = useState(localStorage.getItem("productUser674") ? JSON.parse(localStorage.getItem("productUser674")) : null)
    const [orders,setOrders] = useState([])
    const [deliveries,setDeliveries] = useState([])
    
    const getData = async () => {
        Dataservices.getDeliveries(currentUser.id).then(res => {
            setDeliveries(res.data)
        })
        Dataservices.getOrders(currentUser.id).then(res => {
            setOrders(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[currentUser])

    const value = {
        currentUser : currentUser,
        setCurrentUser:setCurrentUser,
        orders:orders,
        deliveries,deliveries
    }
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
