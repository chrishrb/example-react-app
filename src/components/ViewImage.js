import { CardMedia, Grid, Stack, Typography } from "@mui/material"

const ViewImage = ({ imageUrl, prediction }) => {
  return (
    <Stack>
      <Grid container justifyContent="center">
        <CardMedia
          image={imageUrl}
          style={{ height: 360, width: 550 }}
        />
      </Grid>
      <Grid container justifyContent="center" marginTop={2}>
        <Typography fontSize={24}>➡️  In this image you can see a  {prediction}</Typography>
      </Grid>
    </Stack>
  )
}

export default ViewImage
