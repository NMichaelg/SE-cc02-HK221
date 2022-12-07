import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "../../assets/styles/page.scss"
import { useEffect } from 'react'
import { Paper, Grid, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import Header from '../../components/Header/Header'


function MultipleAreas() {
  const [areas, setAreas] = React.useState([])
  const [mcps, setMcps] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    // fetch MCP-detail before area to avoid undefined error
    fetch("http://localhost:6868/MCP-detail")
      .then(res => res.json())
      .then(
        (result) => {
          setMcps(result)

          fetch("http://localhost:6868/area-info")
            .then(res => res.json())
            .then(
              (result) => {
                setAreas(result['area-info'])
                setIsLoaded(true)
              }
            )
        }
      )
  }, [])

  function findCapacity(name) {
    return mcps.find((mcp) => (mcp.name === name)).capacity * 100 + '%'
  }

  if (!isLoaded) {
    return (
      <div className='areas page'>
        <SideBar />
        <div className="content-container">
          Loading...
        </div>
      </div>
    )
  } else {
    return (
      <div className='areas page'>
        <SideBar />
        <div className="content-container">
          <Header />
          <span className="divider"><hr /></span>
          {/* <Typography variant="h5" sx={{ mb: 1, fontFamily: 'Jetbrains Mono' }}>{area}</Typography> */}
          <Grid container spacing={4} sx={{ p: 3 }}>
            {areas.map((area) =>
              <Grid item>
                <Card sx={{ boxShadow: 3, padding: "7px"}}>
                  <CardActionArea sx={{p: 1}}>
                    <Typography sx={{ fontFamily: 'Jetbrains Mono', backgroundColor: '#A3FF77', borderRadius: 2, p: "3px", mb: 1}} variant='h5'>{area.district + ' - Ward ' + area.ward}</Typography>
                    {area.mcps.map((m) =>
                      <Typography sx={{ fontFamily: 'Jetbrains Mono' }}>MCP: {m} - {findCapacity(m)}</Typography>
                    )}
                  </CardActionArea>
                </Card>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    )
  }
}

export default MultipleAreas