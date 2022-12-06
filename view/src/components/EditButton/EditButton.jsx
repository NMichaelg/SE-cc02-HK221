import React from 'react'
import { IconButton} from '@mui/material'
import BuildIcon from '@mui/icons-material/Build';

function EditButton({ onClick }) {
    return (
        <IconButton size="small" color="primary"
            sx={{ ml: 2 }} onClick={onClick}>
            <BuildIcon />
        </IconButton>
    )
}

export default EditButton;