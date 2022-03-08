import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
  return (
    <>
      <Router>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
