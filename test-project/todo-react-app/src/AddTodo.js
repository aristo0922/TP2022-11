import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { title: "" } }; //사용자 입력을 저장할 오브젝트
  }

  render() {
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo Here" fullWidth />
          </Grid>
          <Grid fullWidth color="secondary" variant="outlined">
            +
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AddTodo;
