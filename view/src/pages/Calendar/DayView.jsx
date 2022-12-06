import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import "../../assets/styles/page.scss"
import "../../assets/styles/utilities.scss"

import { Stack, Typography, Paper, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, Card, CardContent, CardActionArea } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build';
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

import TaskInfo from '../../pages/Calendar/TaskInfo'
import DayViewBody from '../../pages/Calendar/DayViewBody'


function DayView() {
  const [task, setTask] = React.useState([undefined])
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    fetch("http://localhost:6868/one-day-multi-task")
      .then(res => res.json())
      .then(
        (result) => {
          let all = result.all_tasks_detail
          let task = []
          for (let i = 0; i < all.length; i ++)
          {
            task[i] = all[i]; // check 10 task đầu tiên
          }
          // task0 = task[0]
          setIsLoaded(true);
          setTask(task)
        },
      )
  }, [])

  const [openEditTeam, setOpenEditTeam] = React.useState(false);
  const [selectedValueEditTeam, setSelectedValueEditTeam] = React.useState(task.team_id);

  const [openEditArea, setOpenEditArea] = React.useState(false);
  const [selectedValueEditArea, setSelectedValueEditArea] = React.useState('');


  const handleClickOpenEditTeam = () => {
    setOpenEditTeam(true);
  };

  const handleCloseEditTeam = (value) => {
    setOpenEditTeam(false);
    setSelectedValueEditTeam(value);
    console.log("Select Team: " + value);
  };

  const handleClickOpenEditArea = () => {
    setOpenEditArea(true);
  };

  const handleCloseEditArea = (value) => {
    setOpenEditArea(false);
    setSelectedValueEditArea(value);
    console.log("Selected MCPs:", value)
  };

  // MAIN() to render the page  

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='calendar-daily page'>
          <SideBar/>
          <div className="content-container">
            <Header/>
            <span className="divider"><hr /></span>
           
            <DayViewBody task={task}/>

          </div>
      </div>
    )
  }
}

function EditTeam(props) {
  const { onClose, selectedValue, open } = props;


  const [teams, setTeams] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:6868/team-info")
      .then(res => res.json())
      .then(
        (result) => {
          setTeams(result.team_info)
        }
      )
  }, [])

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='md' >
      <DialogTitle sx={{ fontFamily: 'Jetbrains Mono', textAlign: 'center' }}>Select Team</DialogTitle>
      <Stack direction="row" spacing={2} sx={{ p: 2, overflowX: 'scroll' }}>
        {teams.map((team) => <TeamInfo team={team} onClick={() => onClose(team.team_id)} />)}
      </Stack>
    </Dialog>
  );
}


function EditArea(props) {
  const { onClose, selectedValue, open, currentMCPs } = props;

  const handleClose = () => {
    onClose(mcps);
  };

  const handleMcpChange = (event) => {
    setMcps({
      ...mcps,
      [event.target.name]: event.target.checked,
    });
  };

  const [areas, setAreas] = React.useState([])
  useEffect(() => {
    fetch("http://localhost:6868/area-info")
      .then(res => res.json())
      .then(
        (result) => {
          setAreas(result['area-info'])
        }
      )
  }, [])

  const [mcps, setMcps] = React.useState(
    currentMCPs.reduce((acc,curr)=> (acc[curr]=true,acc),{})
  );

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='md' >
      <DialogTitle sx={{ fontFamily: 'Jetbrains Mono', textAlign: 'center' }}>Select MCPs</DialogTitle>
      <Box sx={{ display: 'flex' }}>
        {areas.map((area) =>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ fontFamily: 'Jetbrains Mono'}}>{area.district + ' - Ward ' + area.ward}</FormLabel>
            <FormGroup>
              {area.mcps.map((m) =>
                <FormControlLabel
                  control={
                    <Checkbox checked={mcps[m]} onChange={handleMcpChange} name={m} />
                  }
                  label={<Typography sx={{fontFamily: 'Jetbrains Mono'}}>{m}</Typography>}
                />)}
            </FormGroup>
          </FormControl>
        )}
      </Box>
    </Dialog>
  );
}

export default DayView