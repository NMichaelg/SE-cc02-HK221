import {useState, useEffect} from 'react'
import { Paper, List, Grid } from "@mui/material"
import TeamInfoItem from './TeamInfoItem'
import EditButton from '../../../components/EditButton/EditButton'

function SingleTeamInfo({ teamInfo }) {
    console.log("SingleTeamInfo", teamInfo)
    // useEffect(function(){
    //     setSingleTeam(teamInfo);
    // },[])

    return (
        // <div className="e">heelo</div>
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
    )
}

export default SingleTeamInfo

function handleClickOpenEditLeader() { }
function handleClickOpenEditResources() {}
function handleClickOpenEditMember() {}