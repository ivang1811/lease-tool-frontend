import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useUser } from "../../hooks/useUser";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { dispatch, state } = useUser();
  console.log(state);

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          RentBuddies
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            {!state.Id && (
              <>
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
                <Link to="/register" className={classes.link}>
                  Register
                </Link>
              </>
            )}
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
            {state.Id && (
              <>
                {/* <Link to="/dashboard" className={classes.link}>
                  Welcome, {state.ForeName} {state.Surname}
                </Link> */}
                <Link to="/dashboard" className={classes.link}>
                  Dashboard
                </Link>
                <Link
                  to="/login"
                  onClick={() =>
                    dispatch({
                      type: "SET",
                      data: { Id: "", ForeName: "", SurName: "" },
                    })
                  }
                  className={classes.link}
                >
                  Log Out
                </Link>
              </>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
