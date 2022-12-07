import {useState, useEffect} from 'react'
import axios from "axios"
import TeamOverView from './TeamOverView';
import "./multipleTeamBody.scss"
import {useNavigate, useLocation} from "react-router-dom";

function MultipleTeamBody() {
    var [teams, setTeams] = useState([]);
    var [teamPath, setTeamPath] = useState();
    const navigate = useNavigate();
    var curPath = useLocation();

    function DataToMultipleTeamBody(teamID){
        var newPath = curPath.pathname.concat('/team/',teamID)
        // console.log("move to ",newPath)
        setTeamPath(newPath);
    }

    useEffect(function () {
        axios.get("http://localhost:6868/team-info")
            .then(function (teamDataRes) {
                var teamList = teamDataRes.data.team_info;
                // console.log({teamList});
                setTeams(teamList);
            })
    }, [])

    useEffect(function(){
        navigate(teamPath,{replace:true});
    },[teamPath])
  

    return (
        <div className="multipleTeamBody-container">
            {teams.map(function (team) {
                return <TeamOverView team={team} DataToMultipleTeamBody={DataToMultipleTeamBody}></TeamOverView>
                // console.log("team:",team);
            })}
        </div>
    )
  
}

export default MultipleTeamBody