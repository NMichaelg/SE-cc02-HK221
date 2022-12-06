import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import {Stack, Typography, Paper, List, Dialog, DialogTitle } from '@mui/material'
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
import { useParams } from 'react-router-dom';

function TaskView() {
  const [task, setTask] = React.useState('')
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  function refetch() {
    setToggle(prevState => !prevState);
  }

  let params = useParams();

  useEffect(() => {
    fetch("http://localhost:6868/task-info")
      .then(res => res.json())
      .then(
        (result) => {
          let all = result.all_tasks_detail
          let task = all[params.taskId - 1]
          setTask(task)
          setIsLoaded(true);
        },
      )
  }, [toggle])


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
    refetch();
  };

  const handleClickOpenEditArea = () => {
    setOpenEditArea(true);
  };

  const handleCloseEditArea = (value) => {
    setOpenEditArea(false);
    setSelectedValueEditArea(value);
    console.log("Selected MCPs:", value);
    refetch();
  };

  const [openAlert, setOpenAlert] = React.useState(false);
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  }

  if (!isLoaded) {
    return (
      <div className='calendar-task page'>
        <SideBar />
        <div className="content-container">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className='calendar-task page'>
        <SideBar />
        <div className="content-container">
          <Paper sx={{ m: 3, boxShadow: 3, borderRadius: "30px" }}>
            <List>
              <TaskInfoItem title='Duration' content={task.shift.start_time + ' - ' + task.shift.end_time} />
              <TaskInfoItem title='Name' content='Waste Collection' />
              <TaskInfoItem title='Team' content={task.team_id}
                button={<EditButton onClick={handleClickOpenEditTeam} />}
              />
              <TaskInfoItem title='Leader' content={task.leader} />
              <TaskInfoItem title='Member' content={task.members.join(", ")} />
              <TaskInfoItem title='Area' content={task.area_info.map((a) => "District " + a.district + ' - Ward ' + a.ward).join(', ')}
                button={<EditButton onClick={handleClickOpenEditArea} />}
              />
              <TaskInfoItem title='MCP' content={task.area_info.map((a) => a.mcps.join(', ')).join(', ')} />
              <TaskInfoItem title='Resources' content={
                task.resources.trucks.length + ' trucks (' + task.resources.trucks.join(', ') + '), '
                + task.resources.trollers.length + ' trollers (' + task.resources.trollers.join(', ') + ')'
              } />
              <TaskInfoItem title='Description' content='
              Team uses Resources to conduct waste collection at the designated
              Collection Area to the Collection Point. All Team Members are
              responsible for reporting the progress of work to Team Leader.
              Team Leader is responsible for answering back and urging the
              remaining Members to complete the work. Try to complete the
              work within the specified Time.'
              />
              <TaskInfoItem title='Route' content='' />
            </List>
          </Paper>
          <EditTeam
            selectedValue={selectedValueEditTeam}
            open={openEditTeam}
            onClose={handleCloseEditTeam}
          />
          <EditArea
            selectedValue={selectedValueEditArea}
            open={openEditArea}
            onClose={handleCloseEditArea}
            currentMCPs={[].concat(...task.area_info.map((a) => a.mcps))}
          />
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
    currentMCPs.reduce((acc, curr) => (acc[curr] = true, acc), {})
  );

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='md' >
      <DialogTitle sx={{ fontFamily: 'Jetbrains Mono', textAlign: 'center' }}>Select MCPs</DialogTitle>
      <Box sx={{ display: 'flex' }}>
        {areas.map((area) =>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend" sx={{ fontFamily: 'Jetbrains Mono' }}>{area.district + ' - Ward ' + area.ward}</FormLabel>
            <FormGroup>
              {area.mcps.map((m) =>
                <FormControlLabel
                  control={
                    <Checkbox checked={mcps[m]} onChange={handleMcpChange} name={m} />
                  }
                  label={<Typography sx={{ fontFamily: 'Jetbrains Mono' }}>{m}</Typography>}
                />)}
            </FormGroup>
          </FormControl>
        )}
      </Box>
    </Dialog>
  );
}


export default TaskView