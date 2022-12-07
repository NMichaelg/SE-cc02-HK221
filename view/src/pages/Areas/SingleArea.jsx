import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "../../assets/styles/page.scss"
import { Paper, Grid, Typography } from '@mui/material'
import MCPInfo from '../../components/MCPInfo/MCPInfo'

const mcps = [{
    "name": "TB1",
    "capacity": 0.6
},
{
    "name": "TB2",
    "capacity": 0.3
},
{
    "name": "TB3",
    "capacity": 0.8
}]

function SingleArea() {
    let area = mcps[0] === 'TB1' ? 'Tan Binh - Ward 15' : 'Phu Nhuan - Ward 2'

    return (
        <div className='areas page'>
            <SideBar />
            <div className="content-container">
                <Paper sx={{ p: 3, m: 3, boxShadow: 3, borderRadius: "30px"}}>
                    <Typography variant="h5" sx={{mb:1, fontFamily: 'Jetbrains Mono'}}>{area}</Typography>
                    <Grid container spacing={2}>
                        {mcps.map((m) => <Grid item > <MCPInfo mcp={m} /></Grid>)}
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}

export default SingleArea