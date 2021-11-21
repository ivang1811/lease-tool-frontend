import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardPage from "../components/utils/DashboardPage";
import { Typography } from "@material-ui/core";
import Chat from "../components/Chat";
const theme = createTheme();

export default function ChatPage() {
  return (
    <DashboardPage containerSize={false} WithoutBox={true}>
      <Chat />
    </DashboardPage>
  );
}
