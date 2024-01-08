import { Route, Routes } from "react-router-dom"
import { SignIn } from "./components/SignIn";
import { Home } from "./pages/Home";
import UserState from "./context/users/userState";

function App() {

  return (
    <>
      <UserState>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </UserState>
    </>
  );
}

export default App;
