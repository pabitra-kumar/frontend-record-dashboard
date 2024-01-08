import { Route, Routes } from "react-router-dom"
import { SignIn } from "./components/SignIn";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
