import React from 'react'
import { useEffect, useState, useNavigate, useLocation } from 'react';
import TrollerInfo from '../Vehicles/TrollerInfo'
import TruckInfo from '../Vehicles/TruckInfo'

function MultipleVehiclesBody() { // taskList
    const [troller, setTroller] = React.useState([undefined])
    const [truck, setTruck] = React.useState([undefined])
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        fetch("http://localhost:6868/vehicle-info")
            .then(res => res.json())
            .then(
                (result) => {
                    let fall = result.trollers // fist_all
                    let sall = result.trucks
                    let trollers = [] // init an empty array
                    let trucks = []
                    for (let i = 0; i < fall.length; i++) {
                        trollers[i] = fall[i]; // check 10 task đầu tiên
                    }
                    for (let j = 0; j < sall.length; j++) {
                        trucks[j] = sall[j]; // check 10 task đầu tiên
                    }

                    setIsLoaded(true);
                    setTroller(trollers)
                    setTruck(trucks)
                },
            )
    }, [])

    const trollers = troller
    const trucks = truck

    //console.log(tasks);

    if (!isLoaded) {
        return (
            <div className="loading-container">Loading</div>
        )
    } else {
        return (
            <div className="DayViewBody-container">

                {/* <TaskInfo task = {task} > fuck </TaskInfo> */}
                {trollers.map((troller) => (
                    // TaskInfo() nhận 1 task in ra 1 thẻ
                    <TrollerInfo troller={troller}></TrollerInfo>
                    // console.log(troller)
                ))}

                {trucks.map((truck) => (
                    // TaskInfo() nhận 1 task in ra 1 thẻ
                    <TruckInfo truck={truck}></TruckInfo>
                ))}
            </div>
        )
    }
}

export default MultipleVehiclesBody