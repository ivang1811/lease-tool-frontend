import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton({ setAccountType }) {
  const [alignment, setAlignment] = React.useState("Tenant");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setAccountType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="Tenant">Tenant</ToggleButton>
      <ToggleButton value="Landlord">Landlord</ToggleButton>
    </ToggleButtonGroup>
  );
}
