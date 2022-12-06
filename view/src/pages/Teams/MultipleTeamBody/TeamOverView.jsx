import React from 'react'
import {Card, CardActionArea, CardContent, Typography, Box, Container, Button, List, ListItem, ListItemButton, ListItemText} from "@mui/material"

const font = 'Jetbrains Mono'
const fontSize = 15
const t_sx = { fontFamily: 'Inherit', fontSize: 'Inherit' };

function TeamOverView({ team }) {
  return (
    <div className="TeamOverView-Item">
      <Card sx={{ width: 300 }}>
        <CardContent sx={{ fontFamily: font, fontSize: fontSize }}>
          <Typography variant="h5" align="center" sx={{ fontFamily: 'Inherit', background: "#A3FF77" }}>Team {team.team_id}</Typography>
          <Typography sx={t_sx}><b>Leader:</b> {team.leader}</Typography>
          <Typography sx={t_sx}><b>Members:</b></Typography>
          <List sx={{ p: 0 }}>
            {team.members.map((name) => <ListItem sx={{ p: 0, pl: 2 }}><Typography sx={t_sx}>{name}</Typography></ListItem>)}
          </List>
          <Typography sx={t_sx}><b>Resources:</b></Typography>
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0, pl: 2 }}><Typography sx={t_sx}> {team.resources.trucks.join(', ')}</Typography></ListItem>
            <ListItem sx={{ p: 0, pl: 2 }}><Typography sx={t_sx}> {team.resources.trollers.join(', ')}</Typography></ListItem>
          </List>
        </CardContent>
        <Container sx={{display:"flex", justifyContent:"center", }}>
          <Button sx={{ display: "flex" }}> <Typography sx={t_sx}>Delete</Typography> </Button>
          <Button> <Typography sx={t_sx}>Modify</Typography> </Button>
        </Container>
      </Card>
    </div>
  )
}


export default TeamOverView