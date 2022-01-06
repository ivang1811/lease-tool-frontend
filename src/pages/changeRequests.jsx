import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "100%",
    marginTop: "4%",
    borderRadius: "2rem",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
    borderRadius: "2rem",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  active: {
    backgroundColor: "#26b7a0",
    borderRadius: "2rem",
  },
});
const theme = createTheme();

export default function ChangeRequest() {
  const classes = useStyles();
  return (
    <DashboardPage WithoutBox={true} containerSize="xl">
      <Typography component="h1" variant="h5">
        Change Request Page to be designed
      </Typography>
      <div>
        <Grid container component={Paper} className={classes.chatSection}>
          <Grid
            item
            xs={3}
            className={classes.borderRight500}
            style={{ borderRadius: "2rem" }}
          >
            <List
              style={{
                backgroundColor: "#26b789",
                color: "white",
                borderRadius: "2rem 0 0 2rem",
              }}
            >
              <ListItem button key="RemySharp" className={classes.active}>
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Al
                ice"
                >
                  Alice
                </ListItemText>
              </ListItem>
              <ListItem button key="CindyBaker">
                <ListItemIcon>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              backgroundColor: "#f0f0f0",
              borderRadius: "0 2rem 2rem 0",
              color: "#26b789",
            }}
          >
            <Box textAlign={"center"}>
              <p>Address</p>
              <p>Address</p>
              <p>Address</p>
            </Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              style={{ margin: "0.5rem" }}
            >
              <Grid
                item
                xs={5}
                style={{
                  textAlign: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Current
                </Typography>
                <Box
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "2rem",
                    textAlign: "center",
                    width: "100%",
                    height: 300,
                  }}
                ></Box>
              </Grid>

              <Grid
                item
                xs={5}
                style={{
                  textAlign: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Proposed
                </Typography>
                <Box
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "2rem",
                    textAlign: "center",
                    width: "100%",
                    height: 300,
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </DashboardPage>
  );
}
