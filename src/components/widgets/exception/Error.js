import React from 'react'
import { Alert,AlertTitle } from '@mui/material'
export default function Error({message,source}) {
  return (
   <Alert severity="error">
   <AlertTitle>Error!</AlertTitle>
     {message} — <strong>{source}</strong>
    </Alert>
  )
}
