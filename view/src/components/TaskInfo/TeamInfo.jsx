import React from 'react'
import { Card, CardActionArea, CardContent, Typography, List, ListItem } from '@mui/material'

const font = 'Jetbrains Mono'
const fontSize = 15

const t_sx = { fontFamily: 'Inherit', fontSize: 'Inherit' };
function TeamInfo({ team, onClick }) {
    return (
        <Card sx={{width: 300, borderRadius: 3, minWidth:300}}>
            <CardActionArea onClick={onClick}>
                <CardContent sx={{fontFamily: font, fontSize: fontSize}}>
                    <Typography variant="h5" align="center" sx={{fontFamily: 'Inherit'}}>Team {team.team_id}</Typography>
                    <Typography sx={t_sx}><b>Leader:</b> {team.leader}</Typography>
                    <Typography sx={t_sx}><b>Members:</b></Typography>
                    <List sx={{p: 0}}>
                        {team.members.map((name) => <ListItem sx={{p: 0, pl: 2}}><Typography sx={t_sx}>{name}</Typography></ListItem>)}
                    </List>
                    <Typography sx={t_sx}><b>Resources:</b></Typography>
                    <List sx={{p: 0}}>
                        <ListItem sx={{p: 0, pl: 2}}><Typography sx={t_sx}> {team.resources.trucks.join(', ')}</Typography></ListItem>
                        <ListItem sx={{p: 0, pl: 2}}><Typography sx={t_sx}> {team.resources.trollers.join(', ')}</Typography></ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TeamInfo