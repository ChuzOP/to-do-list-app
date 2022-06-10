import { Logout } from "@mui/icons-material";
import { Button, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "./MaterialUISwitch";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import ThemeLight from "../../Styles/ThemeLight";
import ThemeDark from "../../Styles/ThemeDark";

const themeDark = ThemeDark;
const themeLight = ThemeLight;

function TaskHeader() {
  const [light, setLight] = useState(true);
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Box
        sx={{
          margin: 0,
          backgroundColor: "#3b7bf5",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 4,
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Profile Name
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Logout />}
            sx={{
              width: 120,
              height: 40,
              marginLeft: 1.45,
            }}
            href="/"
          >
            LogOut
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <FormControlLabel
              onClick={() => setLight((prev) => !prev)}
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
          </FormGroup>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default TaskHeader;
