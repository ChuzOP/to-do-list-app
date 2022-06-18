import React from "react";
import { Box } from "@mui/system";
import { Delete, Logout } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "./MaterialUISwitch";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Fab,
  TextField,
  Button,
  CssBaseline,
  Typography,
  Container,
} from "@mui/material";
import ThemeLight from "../Styles/ThemeLight";
import ThemeDark from "../Styles/ThemeDark";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

const themeDark = ThemeDark;
const themeLight = ThemeLight;

function Tasks() {
  const [light, setLight] = useState(true);
  const [open, setOpen] = useState(false);

  let Name = localStorage.getItem("name-acount").replace(/"/g, "");
  // let TasksArray = localStorage.getItem("tasks-acount").replace(/"/g, "");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [todo, setTodo] = useState([]);
  const [tarea, setTarea] = useState("");
  const [tareaDescription, setTareaDescription] = useState("");
  const addTodo = () => {
    const newTodo = {
      id: 1,
      title: tarea,
      descripitom: tareaDescription,
    };
    setTodo([...todo, newTodo]);
  };

  const handleClick = () => {
    setTodo(todo.filter())
  };

  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Box>
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
              {Name}
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
        <Box>
          {/* dialog -------------------------------------------------------------------------*/}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle align="center" color="secondary">
              New Tarea
            </DialogTitle>
            <Box component="form" onSubmit={handleSubmit}>
              <DialogContent>
                <TextField
                  autoFocus
                  name="title"
                  margin="dense"
                  id="title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={tarea}
                  onChange={(e) => setTarea(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={tareaDescription}
                  onChange={(e) => setTareaDescription(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose} type="submit">
                  Save
                </Button>
              </DialogActions>
            </Box>
          </Dialog>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              width: 600,
              height: 400,
            }}
          >
            <List
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            >
              {todo.map((todo) => {
                return (
                  <ListItem
                    key={todo.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="comments"
                        onClick={handleClick}
                      >
                        <Delete />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(todo.id)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(todo.id) !== -1}
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={todo.id}
                        primary={todo.title}
                        secondary={todo.descripitom}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Container>
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
            }}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Tasks;
