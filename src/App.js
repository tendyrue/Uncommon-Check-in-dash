import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, MainDash } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/maindash" element={<MainDash />} />
      </Routes>
    </div>
  );
}

export default App;
