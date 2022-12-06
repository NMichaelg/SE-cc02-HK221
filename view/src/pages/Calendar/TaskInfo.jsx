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

const font = 'Jetbrains Mono'
const fontSize = 15

const t_sx = { fontFamily: 'Inherit', fontSize: 'Inherit' };
function TaskInfo({ task }) {
    return (
        <div className="TaskInfo-Item">
            <Card sx={{width: 300}}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Task {task.team_id}</Typography>
                    <TaskInfoItem title='Area' content={task.area_info.map((a) => "District " + a.district + ' - Ward ' + a.ward).join(', ')}/>
                    <TaskInfoItem title='Team' content={task.team_id}/>
                    <Typography sx={t_sx}><b>Leader:</b> {task.leader}</Typography>
                    <TaskInfoItem title='Shift' content={task.shift.start_time + ' - ' + task.shift.end_time} />
                </CardContent>
                <CardActionArea sx={{ m: 0, display:"flex" }}>
                    <Button sx={{ display: "flex", flex:"1", background:"#ff5f5f" }}> <Typography sx={{color: "#000000" }}>Delete</Typography> </Button>
                    <Button sx={{ display: "flex", flex:"1", background:"#edd500" }}> <Typography sx={{color: "#000000" }}>Modify</Typography> </Button>
                </CardActionArea>  
            </Card>
        </div>
    )
}

export default TaskInfo