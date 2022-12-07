import React from 'react'
import { useEffect } from 'react';
import TaskInfo from '../../pages/Calendar/TaskInfo'
import './DayViewBody.scss'

    function DayViewBody({task}) {
        const tasks = task

        //console.log(tasks);
        
        return (
            <div className="DayViewBody-container">

                {/* <TaskInfo task = {task} > fuck </TaskInfo> */}
                {tasks.map((task) => (
                    // TaskInfo() nhận 1 task in ra 1 thẻ
                    <TaskInfo task = {task} ></TaskInfo>
                ))}
            </div>
        )
    }

export default DayViewBody