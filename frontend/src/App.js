import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginSignup/LoginPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import "./App.css";
import SaveListPage from "./pages/SaveListPage/SaveListPage";
import SaveFolder from "./components/saveFolder/SaveFolder";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/savelist" element={<SaveListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
