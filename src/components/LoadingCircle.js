import { CircularProgress, Grid } from "@mui/material"

const LoadingCircle = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <CircularProgress />
      </Grid>
    </div>
  )
}

export default LoadingCircle
