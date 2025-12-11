import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdetails from "./userdetails/userdetails";
import Results from "./results/results";
import HomePage from "./home/home";
import LoginSignup from "./loginsignup/loginsignup";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Userdetails />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/TravelPlannerApp" element={<Userdetails />} /> 
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
