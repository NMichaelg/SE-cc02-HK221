import {useState, useEffect} from 'react'
import axios from "axios"
import TeamOverView from './TeamOverView';

function MultipleTeamBody() {
    var [teams, setTeams] = useState([]);
    useEffect(function () {
        axios.get("http://localhost:6868/team-info")
            .then(function (teamDataRes) {
                var teamList = teamDataRes.data.team_info;
                console.log({teamList});
                setTeams(teamList);
            })
    }, [])
  
    return (
        <div className="multipleTeamBody-container">
            {teams.map(function (team) {
                return <TeamOverView team={team}></TeamOverView>
                // console.log("team:",team);
            })}
        </div>
    )
  
}

export default MultipleTeamBody