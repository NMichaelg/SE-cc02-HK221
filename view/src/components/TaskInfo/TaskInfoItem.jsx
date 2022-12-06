import React from 'react'
import { Typography, ListItem } from '@mui/material'

function TaskInfoItem({title, content, button=undefined}) {
    return (
        <ListItem>
        <Typography sx={{ fontFamily: 'Inherit' }}>
          <b>{title} : </b> {content}
        </Typography>
        {button ? button : ''}
      </ListItem>
    )
}

export default TaskInfoItem;