import React, { useState } from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  Container,
} from "@material-ui/core";
import { Link, Navigate } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
const baseUrl = 'http://127.0.0.1:8000'
const HomePage = () => {
  const [state, setState] = useState({
    roomCode: null,
  });

  const Redirect = (code) => {
    if (code != null) {
      return <Navigate to={`/room/${this.state.roomCode}`} />;
    }
  };
  // useEffect(async () => {
  //   fetch("api/user-in-room")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setState({ roomCode: data.code });
  //     },[]);
  // });

  useEffect(() => {
    //  fetch("api/user-in-room")
     axios.get(`${baseUrl}/api/user-in-room`)
      .then((response) => setState({roomCode : response.data.code}));
     
      
  },[state.roomCode]);

  // useEffect(() => {
  //   const fetchData=async()=>{ fetch("api/user-in-room")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setState({ roomCode: data.code });
  //     });}
  //     fetchData();
  // },[state.roomCode]);


  // async function componentDidMount() {
  //   fetch("/api/user-in-room")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setState({
  //         roomCode: data.code,
  //       });
  //     });
  // }
  // componentDidMount()
  if (state.roomCode != null) {
    return <Navigate to={`/room/${state.roomCode}`} />;
  }

  return (
    <Container>
      <Grid
        container
        spacing={3}
        align="center"
        justifyContent="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} align="center">
          <Typography variant="h3" component="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Room
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
