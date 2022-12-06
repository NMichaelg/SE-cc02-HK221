import React from 'react'
import { useEffect, useState, useNavigate, useLocation } from 'react';
import TaskInfo from '../../pages/Calendar/TaskInfo'
import './DayViewBody.scss'

function DayViewBody({ task }) { // taskList
    var [taskPath, setTaskPath] = useState();
    var [taskPath, setTaskPath] = useState();
    const navigate = useNavigate();
    var curPath = useLocation();

    function DataToDayViewBody(taskID) {
        var newPath = curPath.pathname.concat('/task/', taskID)
        // console.log("move to ",newPath)
        setTaskPath(newPath);
    }
    useEffect(function () {
        navigate(taskPath, { replace: true });
    }, [taskPath])

    const tasks = task

    //console.log(tasks);

    return (
        <div className="DayViewBody-container">

            {/* <TaskInfo task = {task} > fuck </TaskInfo> */}
            {tasks.map((task) => (
                // TaskInfo() nhận 1 task in ra 1 thẻ
                <TaskInfo task={task} DataToDayViewBody={DataToDayViewBody}>

                </TaskInfo>
            ))}
        </div>
    )
}

export default DayViewBody