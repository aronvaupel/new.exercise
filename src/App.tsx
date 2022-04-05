import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ExerciseOne from "./pages/ExerciseOne";
import ExerciseTwo from "./pages/ExerciseTwo";
import ExerciseThree from "./pages/ExerciseThree";
import ExerciseFour from "./pages/ExerciseFour";
import ExerciseFive from "./pages/ExerciseFive";
import ExerciseSix from "./pages/ExerciseSix";
import ExerciseSeven from "./pages/ExerciseSeven";
import ExerciseEight from "./pages/ExerciseEight";

function App() {
  return (
    <div className="App">
      <h1>my app</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise-one" element={<ExerciseOne />} />
        <Route path="/exercise-two" element={<ExerciseTwo />} />
        <Route path="/exercise-three" element={<ExerciseThree />} />
        <Route path="/exercise-four" element={<ExerciseFour />} />
        <Route path="/exercise-five" element={<ExerciseFive />} />
        <Route path="/exercise-six" element={<ExerciseSix />} />
        <Route path="/exercise-seven" element={<ExerciseSeven />} />
        <Route path="/exercise-eight" element={<ExerciseEight />} />
      </Routes>
    </div>
  );
}

export default App;
