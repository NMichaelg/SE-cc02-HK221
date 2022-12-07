import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { Card, CardActionArea, CardContent, Typography, List, ListItem, Button } from '@mui/material'
import TeamInfo from '../../components/TaskInfo/TeamInfo';
import { useEffect } from 'react';
import TaskInfoItem from '../../components/TaskInfo/TaskInfoItem';
import EditButton from '../../components/EditButton/EditButton';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';


const font = 'Jetbrains Mono'
const fontSize = 15

const t_sx = { fontFamily: 'Inherit', fontSize: 'Inherit' };
function TrollerInfo({ troller }) {
    if (troller.team_id != -1)
    return (
        <div className="TrollerInfo-Item">
            <Card sx={{width: 300}}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Troller</Typography>
                    <TaskInfoItem title='Name' content={troller.name}/>
                        <TaskInfoItem title='Assigned Team' content={troller.team_id}/>
                </CardContent>
                {/* <EditTask
                selectedValue={selectedValueEditTask}
                open={openEditTask}
                onClose={handleCloseEditTask}
                />   */}
            </Card>
        </div>
    )
    else{
     return (
        <div className="TrollerInfo-Item">
            <Card sx={{width: 300}}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Troller</Typography>
                    <TaskInfoItem title='Name' content={troller.name}/>
                            <TaskInfoItem title='Assigned Team' content="None"/>
                </CardContent>
                {/* <EditTask
                selectedValue={selectedValueEditTask}
                open={openEditTask}
                onClose={handleCloseEditTask}
                />   */}
            </Card>
        </div>
    )}
}

export default TrollerInfo