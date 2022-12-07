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
function TruckInfo({ truck }) {
    if (truck.team_id != -1)
    return (
        <div className="TruckInfo-Item">
            <Card sx={{width: 300}}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Truck</Typography>
                    <TaskInfoItem title='Name' content={truck.name}/>
                        <TaskInfoItem title='Assigned Team' content={truck.team_id}/>     
                </CardContent>
                {/* <EditTask
                selectedValue={selectedValueEditTask}
                open={openEditTask}
                onClose={handleCloseEditTask}
                />   */}
            </Card>
        </div>
    )
    else
    return (
        <div className="TruckInfo-Item">
            <Card sx={{width: 300}}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Truck</Typography>
                    <TaskInfoItem title='Name' content={truck.name}/>
                        <TaskInfoItem title='Assigned Team' content="None"/>    
                </CardContent>
                {/* <EditTask
                selectedValue={selectedValueEditTask}
                open={openEditTask}
                onClose={handleCloseEditTask}
                />   */}
            </Card>
        </div>
    )
}
export default TruckInfo