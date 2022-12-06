import { useState, useEffect } from 'react'
import axios from 'axios';
import TeamOverview from '../../../components/TeamOverView/TeamOverview';
import "./multipleTeamBody.scss"

function MultpleTeamsBody() {
    var [teams, setTeams] = useState([]);
    useEffect(function () {
        axios.get("http://localhost:6868/team-info")
            .then(function (teamDataRes) {
                var teamList = teamDataRes.data.team_info;
                // console.log({teamList});
                setTeams(teamList);
            })
    }, [])

    console.log(teams);

    return (
        <div className="multipleTeamBody-container">
            {teams.map(function (team) {
                return <TeamOverview team={team}></TeamOverview>
                // console.log("team:",team);
            })}
        </div>
    )
}

export default MultpleTeamsBody