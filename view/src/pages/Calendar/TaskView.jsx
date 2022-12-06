import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { Stack, Typography, Paper, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, Card, CardContent, CardActionArea } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import { useEffect } from 'react';
import TaskInfoItem from '../../components/TaskInfoItem/TaskInfoItem';
import EditButton from '../../components/EditButton/EditButton';

function TaskView(props) {
  const [openEditTeam, setOpenEditTeam] = React.useState(false);
  const [selectedValueEditTeam, setSelectedValueEditTeam] = React.useState('');
  const [task, setTask] = React.useState([undefined])
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    fetch("http://localhost:6868/task-info")
      .then(res => res.json())
      .then(
        (result) => {
          let all = result.all_tasks_detail
          let task0 = all[0] // check tạm task đầu tiên
          setIsLoaded(true);
          setTask(task0)
        },
      )
  }, [task])


  const handleClickOpenEditTeam = () => {
    setOpenEditTeam(true);
  };

  const handleCloseEditTeam = (value) => {
    setOpenEditTeam(false);
    setSelectedValueEditTeam(value);
  };
  if (!isLoaded) {
    return <div>Loading...</div>;
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
                button={<EditButton onClick={undefined} />}
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
        </div>
      </div>
    )
  }
}

function EditTeam(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [teams, setTeams] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:6868/team-info")
      .then(res => res.json())
      .then(
        (result) => {
          setTeams(result.team_info)
        },
        (error) => { }
      )
  }, [])

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='md' >
      <DialogTitle sx={{ fontFamily: 'Jetbrains Mono', textAlign: 'center' }}>Select Team</DialogTitle>
      <Stack direction="row" spacing={2} sx={{ p: 2, overflowX: 'scroll' }}>
        {teams.map((team) => <TeamInfo team={team} />)}
      </Stack>
    </Dialog>
  );
}


export default TaskView