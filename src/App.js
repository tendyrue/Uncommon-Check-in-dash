import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
