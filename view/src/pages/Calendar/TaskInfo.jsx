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
function TaskInfo({ task, DataToDayViewBody }) {
    const taskID = task.team_id
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
                    <Button startIcon={<DeleteIcon color = "black"/>} 
                        sx={{ display: "flex", flex:"1", background:"#ff5f5f" }}> 
                            <Typography sx={{color: "#000000" }}>
                                Delete
                            </Typography> 
                        </Button>
                    <Button startIcon={<DeleteIcon color = "black"/>} 
                        onClick={()=>DataToDayViewBody(taskID)}
                        sx={{ display: "flex", flex:"1", background:"#edd500" }}> 
                            <Typography sx={{color: "#000000" }}>
                                Modify
                            </Typography> 
                        </Button>
                </CardActionArea>
                {/* <EditTask
                selectedValue={selectedValueEditTask}
                open={openEditTask}
                onClose={handleCloseEditTask}
                />   */}
            </Card>
        </div>
    )
}

// function EditTask(props) {
//     const { onClose, selectedValue, open } = props;
  
  
//     const [tasks, setTasks] = React.useState([]);
//     useEffect(() => {
//       fetch("http://localhost:6868/one-day-multi-task")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setTasks(result.all_tasks_detail)
//           }
//         )
//     }, [])
  
//     const handleClose = () => {
//       onClose(selectedValue);
//     };
  
//     return (
//       <Dialog onClose={handleClose} open={open} maxWidth='md' >
//         <DialogTitle sx={{ fontFamily: 'Jetbrains Mono', textAlign: 'center' }}>Select Team</DialogTitle>
//         <Stack direction="row" spacing={2} sx={{ p: 2, overflowX: 'scroll' }}>
//           {teams.map((team) => <TeamInfo team={team} onClick={() => onClose(team.team_id)} />)}
//         </Stack>
//       </Dialog>
//     );
//   }

export default TaskInfo
