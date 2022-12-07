import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import SingleTeamInfo from "./SingleTeamInfo"
import "./SingleTeamBody.scss"

function SingleTeamBody() {
    const teamID = useParams();
    var [teamInfo, setTeamInfo] = useState();
    // console.log("id ", teamID);
    useEffect(function(){
        axios.get("http://localhost:6868/team-info")
        .then(function (teamDataRes) {
            var teamList = teamDataRes.data.team_info;
            
            var team = teamList.find(function(singleTeam){
                return singleTeam.team_id == teamID.teamId;
            })
            // console.log("List ", teamList)
            console.log("Team: ", team);
            setTeamInfo(team)
        })
    },[])

  return (
    <SingleTeamInfo teamInfo={teamInfo}></SingleTeamInfo>
    // <div className="12">hello</div>
  )
}

export default SingleTeamBody