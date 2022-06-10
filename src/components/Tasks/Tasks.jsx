import { Box } from "@mui/system";
import BodyTask from "./Body/BodyTask";
import TaskHeader from "./Header/TaskHeader";

function Tasks() {
  return (
    <Box>
      <TaskHeader />
      <BodyTask/>
    </Box>
  );
}

export default Tasks;
