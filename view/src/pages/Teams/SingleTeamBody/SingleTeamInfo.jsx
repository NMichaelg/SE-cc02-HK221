import React from 'react'
import { Paper, List, Grid } from "@mui/material"
import TeamInfoItem from './TeamInfoItem'

function SingleTeamInfo({ teamInfo }) {
    console.log("SingleTeamInfo", teamInfo)
    return (
        <Grid>
        <Paper sx={{ mx: 3, mt: 5, boxShadow: 3, borderRadius: "30px" }}>
            <List>
                <TeamInfoItem title='Team ID:' content={teamInfo.team_id} />
                <TeamInfoItem title='Leader' content={teamInfo.leader}
                    button={<EditButton onClick={handleClickOpenEditLeader} />}
                />
                <TeamInfoItem 
                    title='Member' 
                    content={teamInfo.members.join(", ")}
                    button={<EditButton onClick={handleClickOpenEditMember}/>}
                />
                <TeamInfoItem 
                    title='Resources' 
                    content={
                    teamInfo.resources.trucks.length + ' trucks (' + teamInfo.resources.trucks.join(', ') + '), '
                    + teamInfo.resources.trollers.length + ' trollers (' + teamInfo.resources.trollers.join(', ') + ')'
                    }
                    button={<EditButton onClick={handleClickOpenEditResources}/>}
                />
            </List>
        </Paper>
        </Grid>
    )
}

export default SingleTeamInfo

function EditButton() { }
function handleClickOpenEditLeader() { }
function handleClickOpenEditResources() {}
function handleClickOpenEditMember() {}