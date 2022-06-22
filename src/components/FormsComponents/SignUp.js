import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import BasedTheme from "../themes/BasedTheme";
import { useState } from "react";
import "./signupinput.css";
import Tasks from "../Tasks/Tasks";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const SignUp = () => {
  const [taskComponent, setTaskComponent] = useState(true);
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    password: "",
    ID: 1,
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.firstName || !values.email || !values.password) {
      console.log("warning parametros vacios pa'");

    } else {
      setTaskComponent(!taskComponent);
      localStorage.setItem("email-acount", JSON.stringify(values.email));
      localStorage.setItem("password-acount", JSON.stringify(values.password));
      localStorage.setItem("name-acount", JSON.stringify(values.firstName));
      localStorage.setItem("id-acount", JSON.stringify(values.ID));
      localStorage.setItem(values.firstName + "'s Tasks", [
        JSON.stringify([["eo"]]),
      ]);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

    const basedTheme = BasedTheme;
    
  return (
    <>
      {taskComponent ? (
        <ThemeProvider theme={basedTheme}>
          <div className="signup-container">
            <div className="signup-component">
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          onChange={onChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          onChange={onChange}
                        />
                        {/* <span>It should be a valid email address!</span> */}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          onChange={onChange}
                        />
                        {/* <span>
                  The password should be 5-12 characters and include at least 1
                  letter, 1 number and 1 special character!
                </span> */}
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
              </Container>
            </div>
          </div>
        </ThemeProvider>
      ) : (
        <Tasks />
      )}
    </>
  );
};

export default SignUp;
