import { Card, CardActionArea, CardContent, Typography, Box, Container, Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useLocation } from 'react-router-dom'

const font = 'Jetbrains Mono'
const fontSize = 15
const fontWeight = 600
const t_sx = { fontFamily: 'Inherit', fontSize: 'Inherit' }

function TeamOverView({team, DataToMultipleTeamBody}) {
    const teamID = team.team_id;
    return (
        <div className="TeamOverView-Item" style={{ padding: "0", margin: "0" }}>
            <Card sx={{ width: "300px", paddingBottom: "15px" }}>
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
                <Container sx={{ display: "flex", justifyContent: "center", }}>
                    <Button 
                        sx={{ display: "flex", flex: "1", background: "#FFF859", color: "#000000" }}
                        onClick = {()=>DataToMultipleTeamBody(teamID)}
                    > <Typography sx={{ fontFamily: font, fontSize: fontSize, fontWeight: fontWeight }}>Modify</Typography>
                    </Button>
                </Container>
            </Card>
        </div>
    )
}


export default TeamOverView