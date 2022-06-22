import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./FormsComponents/SignUp";
import SignInSide from "./FormsComponents/SingInSide";

import Tasks from "./Tasks/Tasks";

function HomeRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Tasks' element={<Tasks/>} />
      </Routes>
    </Router>
  );
}

export default HomeRouter;
