import { Button, Grid } from "@mui/material";

const FileUpload = ({onSubmit}) => {

  return (
    <div>
      <form typeof="post" onSubmit={onSubmit}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                fullWidth={true}
                component="label"
              >
                Choose File
                <input
                  type="file"
                  id="contained-button-file"
                  hidden
                />
              </Button>
            </label>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              fullWidth={true}
              type="submit">
              Upload
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FileUpload
