import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:movie_id" element={<SingleMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
