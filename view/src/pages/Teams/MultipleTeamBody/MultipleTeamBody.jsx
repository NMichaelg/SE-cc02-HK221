import {useState, useEffect} from 'react'
import axios from "axios"

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
    <div>MultipleTeamBody</div>
  )
}

export default MultipleTeamBody