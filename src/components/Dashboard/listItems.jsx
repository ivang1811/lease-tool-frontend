import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";
export const mainLandlordListItems = (
  <div>
    <Link to="/dashboard" style={{ color: "black", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main Dashboard" />
      </ListItem>
    </Link>
    <Link
      to="/dashboard/change-requests"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Change Requests" />
      </ListItem>
    </Link>
    <Link
      to="/dashboard/tenants"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Tenants" />
      </ListItem>
    </Link>
    <Link
      to="/dashboard/properties"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Properties" />
      </ListItem>
    </Link>
    <Link
      to="/dashboard/leases"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button href="/dashboard/create-lease">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Leases" />
      </ListItem>
    </Link>
    <Link
      to="/dashboard/create-lease"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button href="/dashboard/create-lease">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Create new Lease" />
      </ListItem>
    </Link>
  </div>
);

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{ color: "black", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main Dashboard" />
      </ListItem>
    </Link>
    <Link
      to="/tenant-dashboard/change-requests"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Change Requests" />
      </ListItem>
    </Link>
    <Link
      to="/tenant-dashboard/lease"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Lease" />
      </ListItem>
    </Link>
  </div>
);
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Notifications</ListSubheader>
    <Link
      to="/dashboard/chat"
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <ChatBubbleIcon />
        </ListItemIcon>
        <ListItemText primary="New Messages" />
      </ListItem>
    </Link>

    <ListItem button></ListItem>
  </div>
);
